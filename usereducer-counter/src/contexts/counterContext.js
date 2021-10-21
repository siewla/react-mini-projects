import {createContext,useState} from "react";

export const CounterContext=createContext();

export function CounterContextProvider({children}){
  const [counterState, setCounterState]=useState({counterA:0,counterB:0})
  return (
    <CounterContext.Provider value={[counterState, setCounterState]}>
      {children}
    </CounterContext.Provider>
  )
}