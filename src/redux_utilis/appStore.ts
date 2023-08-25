import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./cartSlice";

const appStore = configureStore({
    reducer: {
        contact: contactReducer,
    },
}); 

export default appStore;