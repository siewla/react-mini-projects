import React, { useContext } from 'react';
import { CounterReducerContext } from '../contexts/counterReducerContext';

function CounterHooks() {
  const [counterReducerContext, dispatch] = useContext(CounterReducerContext);

  return (
    <section>
      <h3>Count:{counterReducerContext.counterD}</h3>
      <button onClick={()=>dispatch({type:'INCREMENT_D'})}>+</button>
      <button onClick={()=>dispatch({type:'DECREMENT_D'})}>-</button>
      <button onClick={()=>dispatch({type:'SET_D',payload:0})}>Reset</button>
    </section>
  );
}

export default CounterHooks;
