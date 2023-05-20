import { createSlice } from '@reduxjs/toolkit/';

export interface ProjectState {
	value: Object;
}

const initialState: ProjectState = {
	value: null,
};

const projectSlice = createSlice({
	name: 'projectSlice',
	initialState,
	reducers: {
		projectPatch: (state: ProjectState, action) => {
			state.value = action.payload;
		},
	},
});

export default projectSlice;
export const { projectPatch } = projectSlice.actions;
