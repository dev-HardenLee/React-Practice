// 액션 타입 정의
const INCREASE = 'todos/INCREASE'
const DECREASE = 'todos/DECREASE'

// 액션 생성 함수 정의
export const increase = (num) => ({
  type: INCREASE,
  num,
})

export const decrease = (num) => ({
  type: DECREASE,
  num,
})

const initialState = {
  count: 0,
}

// 리듀서 정의
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        count: state.count + action.num,
      }

    case DECREASE:
      return {
        ...state,
        count: state.count - action.num,
      }

    default:
      return state
  }
} // counterReducer
