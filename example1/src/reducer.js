import * as actionTypes from "./actionTypes"
let id = 0

export function reducer(state = [], action) {
  const { type } = action
  switch (type) {
    case actionTypes.ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload,
          completed: false,
        },
      ]
    case actionTypes.REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload.id)
    default:
      return state
  }
}
