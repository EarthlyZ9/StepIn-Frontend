import { createSlice } from '@reduxjs/toolkit/';

export interface UserState {
	value: Object;
}

const initialState: UserState = {
	value: null,
};

const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		userPatch: (state: UserState, action) => {
			state.value = action.payload;
		},
	},
});

export default userSlice;
export const { userPatch } = userSlice.actions;
