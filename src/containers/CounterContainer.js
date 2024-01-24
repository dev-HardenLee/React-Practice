import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrease, increase } from '../modules/counter'
import Counter from '../components/Counter'

const CounterContainer = () => {
  const state = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const onIncrease = () => {
    dispatch(increase(1))
  }

  const onDecrease = () => {
    dispatch(decrease(1))
  }

  return <Counter count={state.count} onIncrease={onIncrease} onDecrease={onDecrease} />
} // CounterContainer

export default CounterContainer
