import React, { useContext } from 'react';
import {CounterReducerContext} from '../contexts/counterReducerContext'

function CounterHooks() {
  const [counterReducerContext]=useContext(CounterReducerContext)

  return (
    <section>
      <h3>Sum:{counterReducerContext.counterC+counterReducerContext.counterD}</h3>
    </section>
  );
}

export default CounterHooks;
