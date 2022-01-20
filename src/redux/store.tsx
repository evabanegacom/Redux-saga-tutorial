import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";
import rootReducer from "./reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();

const store = composeWithDevTools(applyMiddleware(sagaMiddleware))(createStore)(
  rootReducer
);
sagaMiddleware.run(rootSaga);
export default store;

// export type RootState = ReturnType<typeof store.getState>;
