import { createSlice } from "@reduxjs/toolkit";
import { fetchTimeKey, getTaskFromLocalStorage, portfolioKey } from "../../utils/localStorage";

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: {
        projects: getTaskFromLocalStorage(portfolioKey, []),
        isLoading: true,
        fetchTime: getTaskFromLocalStorage(fetchTimeKey, new Date("March 02, 1991 13:58:12")),
    },
    reducers: {
        setProjects: (state, { payload: newProjects }) => {
            state.projects = newProjects;
            state.isLoading = false;
        },
        fetchProjects: (state) => {
            state.isLoading = true;
        },
        fetchProjectsError: (state) => {
            state.isLoading = false;
        },
        setLoading: (state, {payload: isLoading}) => {
            state.isLoading = isLoading;
        },
        setFetchTime: (state, {payload: date}) => {
            state.fetchTime = date;
        }
    },
});

export const { setProjects, fetchProjects, fetchProjectsError, setFetchTime, setLoading } = portfolioSlice.actions;

const selectPortfolioState = state => state.portfolio;

export const selectProjects = state => selectPortfolioState(state).projects;
export const selectIsProjectsEmpty = state => selectProjects(state).length === 0 && Array.isArray(selectProjects(state));
export const selectIsLoading = state => selectPortfolioState(state).isLoading;
export const selectFetchTime = state => selectPortfolioState(state).fetchTime;

export default portfolioSlice.reducer;