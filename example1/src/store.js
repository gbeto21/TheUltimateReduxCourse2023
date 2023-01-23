import { legacy_createStore as createStore } from "redux"
import { reducer } from "./reducer.js"
import { devToolsEnhancer } from "redux-devtools-extension"

const store = createStore(reducer, devToolsEnhancer({ trace: true }))

export default store
