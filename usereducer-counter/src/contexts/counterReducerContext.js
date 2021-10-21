import {createContext,useReducer} from "react";

export const CounterReducerContext=createContext();

const counterReducer=(state,action)=>{
  switch(action.type){
    case 'INCREMENT_C':
      return {...state,counterC: state.counterC+1}
    case 'DECREMENT_C':
      return {...state,counterC: state.counterC-1}
    case 'SET_C':
      return {...state,counterC: action.payload}
    case 'INCREMENT_D':
      return {...state,counterD: state.counterD+1}
    case 'DECREMENT_D':
      return {...state,counterD: state.counterD-1}
    case 'SET_D':
      return {...state,counterD: action.payload}
    default:
      return state
  }
}

export function CounterReducerContextProvider({children}){
  const [counterState, dispatch]=useReducer(counterReducer,{counterC:0,counterD:0})
  return (
    <CounterReducerContext.Provider value={[counterState, dispatch]}>
      {children}
    </CounterReducerContext.Provider>
  )
}