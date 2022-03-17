import { createSlice } from "@reduxjs/toolkit";

const initialState = {
Links: '',
MenuData: '',
mySkills: '',
CV: '',
Introduction: '',
Projects: '',
Soon: '',
}

export const PrismicSlice = createSlice({
    name: "prismicData",
    initialState,
    reducers: { 
        setLinks(state, action){
            state.Links = action.payload;
        },
        setMenuData (state, action){
            state.MenuData = action.payload;
        },
        setmySkills(state, action){
            state.mySkills = action.payload;
        },
        setCV(state, action){
            state.CV = action.payload;
        },
        setIntroduction(state, action){
            state.Introduction = action.payload;
        },
        setProjects(state, action){
            state.Projects = action.payload;
        },
        setSoon(state, action){
            state.Soon = action.payload;
        }
    }
})

export const {
    setLinks,
    setMenuData,
    setmySkills,
    setCV,
    setIntroduction,
    setProjects,
    setSoon
    } = PrismicSlice.actions

export default PrismicSlice.reducer