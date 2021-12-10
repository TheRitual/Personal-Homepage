import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../PersonalHomepage/ThemeSwitch/themeSlice"
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import portfolioReducer from "../PersonalHomepage/portfolioSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeReducer,
        portfolio: portfolioReducer,
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;