"use client";

import React, { createContext, useContext, useState, useRef, useEffect } from "react";

interface LinkDataContextValue {
  data: Link[];
  setData: React.Dispatch<React.SetStateAction<Link[]>>;
  initialData: Link[];
  setInitialData: React.Dispatch<React.SetStateAction<Link[]>>;
  savedData: Link[];
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  skipHistoryNextUpdate: () => void;
  clearFuture: () => void;
  saveData: (newData: Link[]) => void;
}

const LinkDataContext = createContext<LinkDataContextValue | undefined>(undefined);

export const useLinkData = (): LinkDataContextValue => {
  const context = useContext(LinkDataContext);
  if (!context) {
    throw new Error("useLinkData must be used within a LinkDataProvider");
  }
  return context;
};

interface LinkDataProviderProps {
  children: React.ReactNode;
}

export const LinkDataProvider: React.FC<LinkDataProviderProps> = ({ children }) => {
  const [data, setDataState] = useState<Link[]>([]);
  const [initialData, setInitialData] = useState<Link[]>([]);
  const [savedData, setSavedData] = useState<Link[]>([]);

  // Históricos para undo/redo.
  const pastRef = useRef<Link[][]>([]);
  const futureRef = useRef<Link[][]>([]);
  // Flag para pular o registro no histórico.
  const skipNextHistoryRef = useRef(false);
  const [historyVersion, setHistoryVersion] = useState(0);

  // Função wrapper para setData que registra alterações iniciadas pelo usuário.
  const wrappedSetData: React.Dispatch<React.SetStateAction<Link[]>> = (action) => {
    setDataState((prevData) => {
      const newData =
        typeof action === "function"
          ? (action as (prev: Link[]) => Link[])(prevData)
          : action;
      if (
        !skipNextHistoryRef.current &&
        JSON.stringify(newData) !== JSON.stringify(prevData)
      ) {
        // Pula o registro do primeiro carregamento.
        if (!(prevData.length === 0 && newData.length > 0 && initialData.length === 0)) {
          pastRef.current.push(prevData);
          futureRef.current = [];
          setHistoryVersion((v) => v + 1);
        }
      } else if (skipNextHistoryRef.current) {
        skipNextHistoryRef.current = false;
      }
      return newData;
    });
  };

  const setData = wrappedSetData;

  // Função para pular o registro do próximo update no histórico.
  const skipHistoryNextUpdate = () => {
    skipNextHistoryRef.current = true;
  };

  const undo = () => {
    if (pastRef.current.length === 0) return;
    skipHistoryNextUpdate();
    setDataState((currentData) => {
      const previous = pastRef.current.pop();
      if (previous === undefined) return currentData;
      futureRef.current.push(currentData);
      setHistoryVersion((v) => v + 1);
      return previous;
    });
  };

  const redo = () => {
    if (futureRef.current.length === 0) return;
    skipHistoryNextUpdate();
    setDataState((currentData) => {
      const next = futureRef.current.pop();
      if (next === undefined) return currentData;
      pastRef.current.push(currentData);
      setHistoryVersion((v) => v + 1);
      return next;
    });
  };

  const clearFuture = () => {
    futureRef.current = [];
    setHistoryVersion((v) => v + 1);
  };

  // Função saveData que atualiza o estado e os snapshots,
  // registrando o estado pré–save caso a flag não esteja ativa.
  const saveData = (newData: Link[]) => {
    if (!skipNextHistoryRef.current && JSON.stringify(data) !== JSON.stringify(newData)) {
      pastRef.current.push(data);
      setHistoryVersion((v) => v + 1);
    }
    setDataState(newData);
    // Cria clones profundos para os snapshots.
    const clone = JSON.parse(JSON.stringify(newData));
    setInitialData(clone);
    setSavedData(clone);
    clearFuture();
    skipNextHistoryRef.current = false;
  };

  const canUndo = pastRef.current.length > 0;
  const canRedo = futureRef.current.length > 0;

  // No primeiro carregamento não vazio, inicializa os snapshots.
  const initialDataSet = useRef(false);
  useEffect(() => {
    if (!initialDataSet.current && data.length > 0) {
      const clone = JSON.parse(JSON.stringify(data));
      setInitialData(clone);
      setSavedData(clone);
      initialDataSet.current = true;
    }
  }, [data]);

  return (
    <LinkDataContext.Provider
      value={{
        data,
        setData,
        initialData,
        setInitialData,
        savedData,
        undo,
        redo,
        canUndo,
        canRedo,
        skipHistoryNextUpdate,
        clearFuture,
        saveData,
      }}
    >
      {children}
    </LinkDataContext.Provider>
  );
};
