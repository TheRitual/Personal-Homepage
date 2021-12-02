import { all } from "@redux-saga/core/effects";
import { portfolioSaga } from "../PersonalHomepage/portfolioSaga";

function* rootSaga () {
    yield all([
        portfolioSaga(),
    ])
}

export default rootSaga;