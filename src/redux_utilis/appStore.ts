import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./cartSlice";

export const appStore = configureStore({
    reducer: {
        contact: contactReducer,
    },
}); 

export type RootState = ReturnType<typeof appStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch