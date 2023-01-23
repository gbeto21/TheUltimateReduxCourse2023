import * as actionTypes from "./actionTypes"
import { createAction } from "@reduxjs/toolkit"

const test = createAction(actionTypes.ADD_TASK)
// console.log(test({ task: "Task 2" }))

export const addTask = createAction(actionTypes.ADD_TASK)
export const removeTask = createAction(actionTypes.REMOVE_TASK)
export const completedTask = createAction(actionTypes.TASK_COMPLETED)

// export const addTask = (task) => {
//   return { type: actionTypes.ADD_TASK, payload: { task } }
// }

// export const removeTask = (id) => {
//   return { type: actionTypes.REMOVE_TASK, payload: { id } }
// }

// export const completedTask = (id) => {
//   return { type: actionTypes.TASK_COMPLETED, payload: { id } }
// }
