import { call, put, delay, takeLatest, select } from "redux-saga/effects";
import { fetchRepos } from "../../utils/fetchData";
import { fetchTimeKey, portfolioKey, saveTaskInLocalStorage } from "../../utils/localStorage";
import { setProjects, fetchProjectsError, fetchProjects, selectIsProjectsEmpty, setFetchTime, setLoading, selectFetchTime } from "./portfolioSlice";

function* fetchProjectsHandler() {
    try {
        const isEmpty = yield select(selectIsProjectsEmpty);
        const lastFetchDate = new Date(yield select(selectFetchTime));
        const now = yield new Date();
        const difference = now - lastFetchDate;
        if (isEmpty || difference > 600000) {
            yield delay(5000);
            const newDate = yield new Date();
            yield call(saveTaskInLocalStorage, fetchTimeKey, newDate);
            yield put(setFetchTime(newDate));
            const repos = yield call(fetchRepos, "theritual");
            yield call(saveTaskInLocalStorage, portfolioKey, repos.data);
            yield put(setProjects(repos.data));
        } else {
            yield put(setLoading(false));
        }
    } catch (error) {
        yield put(fetchProjectsError());
        yield call(alert, "Something went wrong!");
        yield call(console.error, error);
    }
}

export function* portfolioSaga() {
    yield takeLatest(fetchProjects.type, fetchProjectsHandler);
}