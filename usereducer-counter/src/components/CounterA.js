import React, { useContext } from 'react';
import {CounterContext} from '../contexts/counterContext'


function CounterHooks() {
  const [counterContext,setCounterContext] = useContext(CounterContext)
  const handleIncrement = () => {
    setCounterContext({...counterContext,counterA:counterContext.counterA+1})
  };

  const handleDecrement = () => {
    setCounterContext({...counterContext,counterA:counterContext.counterA-1})
  };

  const handleReset = () => {
    setCounterContext({...counterContext,counterA:0})
  };

  return (
    <section>
      <h3>Count:{counterContext.counterA}</h3>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </section>
  );
}

export default CounterHooks;
