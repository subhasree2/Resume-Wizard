import { createSlice } from "@reduxjs/toolkit";

export const SkillSlice = createSlice({
    name : 'Skill',
    initialState : {
        value : []
    },
    reducers : {
        addSkill : (state, action) => {
            state.value.push(action.payload);
        },
        deleteSkill : (state, action) => {
            state.value = state.value.filter((Skill) => Skill.id !== action.payload.id);
        },
        updateSkill : (state, action) => {
            state.value.map((Skill) => {
                if (Skill.id === action.payload.id) {
                    Skill.content = action.payload.content;
                }
            })
        },
    }
})

export const { addSkill,deleteSkill,updateSkill } = SkillSlice.actions;
export default SkillSlice.reducer;