import { all } from "@redux-saga/core/effects";
import { themeSaga } from "../common/themeSwitch/themeSaga";

function* rootSaga () {
    yield all([
        themeSaga(),
    ])
}

export default rootSaga;