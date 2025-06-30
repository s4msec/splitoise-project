// components/Preloader.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Loader } from "lucide-react";

const Preloader = () => {
  const pathname = usePathname();

  // Exibe o preloader inicialmente (para o refresh)
  const [loading, setLoading] = useState(true);
  // Estado para controlar o fade-out (desaparecimento suave)
  const [fadeOut, setFadeOut] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const prevPathname = useRef(pathname);

  // Handler para o fim da transição
  const handleTransitionEnd = () => {
    // Após a transição de fade-out, desliga o preloader
    if (fadeOut) {
      setLoading(false);
      // Reseta o estado para evitar conflitos em futuras transições
      setFadeOut(false);
      prevPathname.current = pathname;
    }
  };

  // Efeito para o carregamento inicial (refresh)
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setFadeOut(true);
    }, 250); // Tempo em que o preloader ficará visível antes do fade-out iniciar

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Efeito para mudanças de rota
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      // Ao detectar mudança de rota, garante que o preloader fique visível novamente
      setLoading(true);
      setFadeOut(false);

      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setFadeOut(true);
      }, 250);
    }
  }, [pathname]);

  if (!loading) return null;

  return (
    <div
      // As classes a seguir garantem uma transição suave de opacidade e permitem clique no conteúdo atrás assim que fadeOut iniciar.
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      onTransitionEnd={handleTransitionEnd}
    >
      <Loader className="animate-spin h-10 w-10 text-foreground" />
    </div>
  );
};

export default Preloader;
