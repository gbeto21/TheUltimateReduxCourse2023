import * as actionTypes from "./actionTypes"
let id = 0

export function reducer(state = [], action) {
  // console.log("🚚 Action:")
  // console.dir(action)
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

    case actionTypes.TASK_COMPLETED:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, completed: true } : task
      )
    default:
      return state
  }
}
