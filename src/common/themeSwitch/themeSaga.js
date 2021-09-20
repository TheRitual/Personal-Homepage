import { takeEvery, call, select } from "redux-saga/effects";
import { saveThemeInLocalStorage } from "./themeLocalStorage";
import { selectThemeState } from "./themeSlice";

function* saveThemeInLocalStorageHandler() {
    const theme = yield select(selectThemeState);
    yield call(saveThemeInLocalStorage, theme);
}

export function* themeSaga() {
    yield takeEvery("*", saveThemeInLocalStorageHandler);
}