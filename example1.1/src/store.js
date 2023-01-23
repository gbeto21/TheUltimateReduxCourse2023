import { reducer, sliceReducer } from "./reducer.js"
import { configureStore } from "@reduxjs/toolkit"

// const store = configureStore({ reducer })
const store = configureStore({ reducer: sliceReducer })

export default store
