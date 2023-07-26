import { createSlice } from "@reduxjs/toolkit";

export const EducationSlice = createSlice({
    name : 'Education',
    initialState : {
        value : []
    },
    reducers : {
        addEducation : (state, action) => {
            state.value.push(action.payload);
        },
        deleteEducation : (state, action) => {
            state.value = state.value.filter((education) => education.id !== action.payload.id);
        },
        updateEducation : (state, action) => {
            state.value.map((education) => {
                if (education.id === action.payload.id) {
                    education.Course = action.payload.Course;
                    education.Institution = action.payload.Institution;
                    education.Score = action.payload.Score;
                    education.Duration = action.payload.Duration;
                }
            })
        },
    }
})

export const { addEducation,deleteEducation,updateEducation } = EducationSlice.actions;
export default EducationSlice.reducer;