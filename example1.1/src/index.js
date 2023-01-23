import store from "./store"
import { addTask, removeTask, completedTask } from "./action"

store.dispatch(addTask({ task: "Task 1" }))
console.log(store.getState())

store.dispatch(completedTask({ id: 1 }))
console.log(store.getState())

store.dispatch(removeTask({ id: 1 }))
console.log(store.getState())
