import { createSlice } from "@reduxjs/toolkit";

export const ProjectSlice = createSlice({
    name : 'Project',
    initialState : {
        value : []
    },
    reducers : {
        addProject : (state, action) => {
            state.value.push(action.payload);
        },
        deleteProject : (state, action) => {
            state.value = state.value.filter((Project) => Project.id !== action.payload.id);
        },
        updateProject : (state, action) => {
            state.value.map((Project) => {
                if (Project.id === action.payload.id) {
                    Project.title = action.payload.title;
                    Project.description = action.payload.description;
                    Project.techStack = action.payload.techStack;
                    Project.link = action.payload.link;
                }
            })
        },
    }
})

export const { addProject,deleteProject,updateProject } = ProjectSlice.actions;
export default ProjectSlice.reducer;