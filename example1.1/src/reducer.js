import * as actionTypes from "./actionTypes"
import { createReducer, createSlice } from "@reduxjs/toolkit"
let id = 0

export const reducer = createReducer([], {
  [actionTypes.ADD_TASK]: (state, action) => {
    state.push({
      id: ++id,
      task: action.payload,
      completed: false,
    })
  },
  [actionTypes.REMOVE_TASK]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.id)
    state.splice(index, 1)
  },
  [actionTypes.TASK_COMPLETED]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.id)
    state[index].completed = true
  },
})

const slice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    [actionTypes.ADD_TASK]: (state, action) => {
      state.push({
        id: ++id,
        task: action.payload,
        completed: false,
      })
    },
    [actionTypes.REMOVE_TASK]: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id)
      state.splice(index, 1)
    },
    [actionTypes.TASK_COMPLETED]: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id)
      state[index].completed = true
    },
  },
})

export const sliceReducer = slice.reducer

// export function reducer(state = [], action) {
//   // console.log("🚚 Action:")
//   // console.dir(action)
//   const { type } = action
//   switch (type) {
//     case actionTypes.ADD_TASK:
//       return [
//         ...state,
//         {
//           id: ++id,
//           task: action.payload,
//           completed: false,
//         },
//       ]
//     case actionTypes.REMOVE_TASK:
//       return state.filter((task) => task.id !== action.payload.id)

//     case actionTypes.TASK_COMPLETED:
//       return state.map((task) =>
//         task.id === action.payload.id ? { ...task, completed: true } : task
//       )
//     default:
//       return state
//   }
// }
