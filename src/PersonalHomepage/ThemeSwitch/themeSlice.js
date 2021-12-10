import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: { shade: "light", color: "blue", themeBoxVisible: false },
    reducers: {
        changeShade: (state, { payload: shade }) => {
            state.shade = shade;
        },
        changeColor: (state, { payload: color }) => {
            state.color = color;
        },
        setThemeBoxVisibility: (state, {payload: value}) => {
            state.themeBoxVisible = value;
        }
    },
});

export const { changeColor, changeShade, setThemeBoxVisibility } = themeSlice.actions;

export const selectThemeState = state => state.theme;

export const selectShade = state => selectThemeState(state).shade;
export const selectColor = state => selectThemeState(state).color;
export const selectThemeBoxVisible = state => selectThemeState(state).themeBoxVisible;

export default themeSlice.reducer;