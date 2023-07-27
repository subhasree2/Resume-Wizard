import { createSlice } from "@reduxjs/toolkit";

export const LinkSlice = createSlice({
    name : 'Link',
    initialState : {
        value : []
    },
    reducers : {
        addLink : (state, action) => {
            state.value.push(action.payload);
        },
        deleteLink : (state, action) => {
            state.value = state.value.filter((Link) => Link.id !== action.payload.id);
        },
        updateLink : (state, action) => {
            state.value.map((Link) => {
                if (Link.id === action.payload.id) {
                    Link.content = action.payload.content;
                }
            })
        },
    }
})

export const { addLink,deleteLink,updateLink } = LinkSlice.actions;
export default LinkSlice.reducer;