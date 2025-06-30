import Link from "next/link";

export default async function Home() {
  return (
    <>
    <div className="flex h-screen justify-center items-center">
      <h1>Olá! Você está na página errada... Entre aqui: <Link className="text-blue-500 underline" href={"/projects"}>Projetos</Link></h1>
    </div>
    </>
  );
}
