import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        filter: '',
    },
    reducers: { 
        addContact: (state, action) => {
            state.items.push(action.payload);
        },
        deleteContact: (state, action) => {
            return {
                ...state,
                items: state.items.filter(contact => contact.id !== action.payload),
            };
        }
    }
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;