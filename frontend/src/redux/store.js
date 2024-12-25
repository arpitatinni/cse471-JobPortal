import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"; // Correct import path
import jobSlice from "./jobSlice";

const store = configureStore({
    reducer: {
        auth: authSlice, // Add the `authSlice` reducer
        job: jobSlice
    },
});

export default store;
