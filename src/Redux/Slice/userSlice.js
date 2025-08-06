import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchUsersRequest(state) {
            state.loading = true;
        },
        fetchUsersSuccess(state, action) {
            state.users = action.payload;
            state.loading = false;
        },
        fetchUsersFailed(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailed } = userSlice.actions;
export default userSlice.reducer;
