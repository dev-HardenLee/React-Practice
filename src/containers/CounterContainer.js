import React, { createContext, useContext, useReducer } from 'react'

const initialState = {
  count: 0,
}

export const increase = (num) => ({
  type: 'INCREASE',
  num,
})

export const decrease = (num) => ({
  type: 'DECREASE',
  num,
})

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        count: state.count + action.num,
      }

    case 'DECREASE':
      return {
        ...state,
        count: state.count - action.num,
      }

    default:
      throw new Error(`We don't have this action.type = ${action.type}`)
  }
} // counterReducer

const CountStateContext = createContext()
const CountDispatchContext = createContext()

const CounterContainer = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState)

  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>{children}</CountDispatchContext.Provider>
    </CountStateContext.Provider>
  )
} // CounterContainer

export const useCountStateContext = () => {
  const context = useContext(CountStateContext)

  if (!context) throw new Error(`We don't have CountStateContext`)

  return context
}

export const useCountDispatchContext = () => {
  const context = useContext(CountDispatchContext)

  if (!context) throw new Error(`We don't have CountDispatchContext`)

  return context
}

export default CounterContainer
