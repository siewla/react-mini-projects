import React, { useContext } from 'react';
import {CounterContext} from '../contexts/counterContext'

function CounterHooks() {
  const [counterContext]=useContext(CounterContext)

  return (
    <section>
      <h3>Sum:{counterContext.counterA+counterContext.counterB}</h3>
    </section>
  );
}

export default CounterHooks;
