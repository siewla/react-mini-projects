import React, { useContext } from 'react';
import { CounterContext } from '../contexts/counterContext';

function CounterHooks(props) {
  const  [counterContext,setCounterContext] = useContext(CounterContext)
  const handleIncrement = () => {
    setCounterContext({...counterContext,counterB:counterContext.counterB+1})
  };

  const handleDecrement = () => {
    setCounterContext({...counterContext,counterB:counterContext.counterB-1})
  };

  const handleReset = () => {
    setCounterContext({...counterContext,counterB:0})
  };

  return (
    <section>
      <h3>Count:{counterContext.counterB}</h3>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </section>
  );
}
export default CounterHooks;
