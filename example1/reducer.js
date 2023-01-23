let id = 0

function reducer(state = [], action) {
  const { type } = action
  switch (type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: ++id,
          task: action.payload,
          completed: false,
        },
      ]
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload.id)
    default:
      return state
  }
}
