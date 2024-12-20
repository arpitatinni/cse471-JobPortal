import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"; // Correct import path

const store = configureStore({
    reducer: {
        auth: authSlice, // Add the `authSlice` reducer
    },
});

export default store;
