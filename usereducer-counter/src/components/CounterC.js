import React, { useContext } from 'react';
import { CounterReducerContext } from '../contexts/counterReducerContext';

function CounterHooks() {
  const [counterReducerContext, dispatch] = useContext(CounterReducerContext);

  return (
    <section>
      <h3>Count:{counterReducerContext.counterC}</h3>
      <button onClick={()=>dispatch({type:'INCREMENT_C'})}>+</button>
      <button onClick={()=>dispatch({type:'DECREMENT_C'})}>-</button>
      <button onClick={()=>dispatch({type:'SET_C',payload:0})}>Reset</button>
    </section>
  );
}

export default CounterHooks;
