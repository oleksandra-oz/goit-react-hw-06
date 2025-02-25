import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        search: '',
    },
    reducers: {
        changeFilter: (state, action) => {
            state.search = action.payload;
        },
    }
});

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;