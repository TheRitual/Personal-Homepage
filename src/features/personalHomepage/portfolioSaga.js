import { call, put, delay, takeLatest } from "redux-saga/effects";
import { fetchRepos } from "../../utils/fetchData";
import { setProjects, fetchProjectsError, fetchProjects } from "./portfolioSlice";

function* fetchProjectsHandler() {
    try {
        yield delay(5000);
        const repos = yield call(fetchRepos,"theritual");
        yield put(setProjects(repos.data));
        console.log(repos.data);
    } catch (error) {
        yield put(fetchProjectsError());
        yield call(alert, "Something went wrong!");
        yield call(console.error, error);
    }
}

export function* portfolioSaga() {
    yield takeLatest(fetchProjects.type, fetchProjectsHandler);
}