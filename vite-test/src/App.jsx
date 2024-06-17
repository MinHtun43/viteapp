import React from 'react'
import Counter from './Counter'
import Sub from './Sub'
import Add from './Add'
import CounterProvider from './context/CounterProvider'

const App = () => {
  return (
    <CounterProvider>
<Counter />
<Sub />
<Add />
    </CounterProvider>
  )
}

export default App
