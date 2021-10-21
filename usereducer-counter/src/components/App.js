import React from "react";
import CounterA from './CounterA'
import CounterB from './CounterB'
import CounterSumAB from './CounterSumAB'
import CounterC from './CounterC'
import CounterD from './CounterD'
import CounterSumCD from './CounterSumCD'
import CounterE from './CounterE'
import CounterF from './CounterF'
import { CounterContextProvider } from "../contexts/counterContext";
import { CounterReducerContextProvider } from "../contexts/counterReducerContext";


function App() {
  return (
    <div className="nes-text is-primary">
      <CounterContextProvider>
        <h2>Using state</h2>
        <CounterA />
        <CounterB />
        <CounterSumAB />
      </CounterContextProvider>
      <hr/>
      <CounterReducerContextProvider>
      <h2>Using reducer</h2>
        <CounterC />
        <CounterD />
        <CounterSumCD />
      </CounterReducerContextProvider>
      <hr/>
      {/* <CounterE/> */}
      {/* <CounterF/> */}
    </div>
  );
}

export default App
