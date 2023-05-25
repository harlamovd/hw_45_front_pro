import {combineReducers, configureStore} from "@reduxjs/toolkit";
import todosDataSlice from "./toolkitSlice";

const rootReducer = combineReducers({
    todosData: todosDataSlice
});

 export const store = configureStore({
    reducer: rootReducer,
})