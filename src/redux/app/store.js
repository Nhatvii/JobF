import { configureStore } from "@reduxjs/toolkit";
import jobListReducer from "../reducer/JobSlice";

const rootReducer = {
    jobList: jobListReducer,
}
const store = configureStore({
    reducer: rootReducer,
})

export default store;