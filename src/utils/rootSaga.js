import { all } from "@redux-saga/core/effects";
import { themeSaga } from "../common/themeSwitch/themeSaga";
import { portfolioSaga } from "../features/personalHomepage/portfolioSaga";

function* rootSaga () {
    yield all([
        themeSaga(),
        portfolioSaga(),
    ])
}

export default rootSaga;