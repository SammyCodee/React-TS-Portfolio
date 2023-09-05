import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice';
import postsReducer from './posts/postsSlice';
import weatherSlice from './weather/weatherSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        posts: postsReducer,
        weather: weatherSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch