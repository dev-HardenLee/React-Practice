import React from 'react'
import { useCountDispatchContext, useCountStateContext } from '../containers/CounterContainer'

const Counter = () => {
  const { count } = useCountStateContext()

  const dispatch = useCountDispatchContext()

  const onIncrease = () => {
    dispatch({ type: 'INCREASE', num: 1 })
  }

  const onDecrease = () => {
    dispatch({ type: 'DECREASE', num: 1 })
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </>
  )
} // Counter

export default Counter
