import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: { shade: "light", color: "blue" },
    reducers: {
        changeShade: (state, { payload: shade }) => {
            state.shade = shade;
        },
        changeColor: (state, { payload: color }) => {
            state.color = color;
        },
    },
});

export const { changeColor, changeShade } = themeSlice.actions;

export const selectThemeState = state => state.theme;

export const selectShade = state => selectThemeState(state).shade;
export const selectColor = state => selectThemeState(state).color;

export default themeSlice.reducer;