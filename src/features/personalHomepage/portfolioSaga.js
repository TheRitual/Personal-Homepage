import { call, put, delay, takeLatest } from "redux-saga/effects";
import { getProjects } from "./getProjects";
import { setProjects, fetchProjectsError, fetchProjects } from "./portfolioSlice";

function* fetchProjectsHandler() {
    try {
        yield delay(5000);
        const sampleTasks = yield call(getProjects);
        yield put(setProjects(sampleTasks));
    } catch (error) {
        yield put(fetchProjectsError());
        yield call(alert, "Something went wrong!");
    }
}

export function* portfolioSaga() {
    yield takeLatest(fetchProjects.type, fetchProjectsHandler);
}