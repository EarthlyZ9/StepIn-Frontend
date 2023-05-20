import { configureStore } from '@reduxjs/toolkit/';
import userSlice from './userSlice';
import projectSlice from './projectSlice';

const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		project: projectSlice.reducer,
	},
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
