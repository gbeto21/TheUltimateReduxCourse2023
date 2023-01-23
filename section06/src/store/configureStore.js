import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import employeeReducer from "./employees"
import taskReducer from "./tasks"
import log from "../middleware/log"

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeeReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), log],
})

export default store
