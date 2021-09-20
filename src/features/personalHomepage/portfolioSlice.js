import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: {
        projects: [],
        isLoading: true,
    },
    reducers: {
        setProjects: (state, { payload: newProjects }) => {
            state.projects = newProjects;
        },
        fetchProjects: (state) => {
            state.isLoading = true;
        },
        fetchProjectsError: (state) => {
            state.isLoading = false;
        },
    },
});

export const { setProjects, fetchProjects, fetchProjectsError } = portfolioSlice.actions;

const selectPortfolioState = state => state.portfolio;

export const selectProjects = state => selectPortfolioState(state).projects;
export const selectIsProjectsEmpty = state => selectProjects(state).length === 0;
export const selectIsLoading = state => selectPortfolioState(state).isLoading;

export default portfolioSlice.reducer;