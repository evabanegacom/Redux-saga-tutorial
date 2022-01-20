import { all } from 'redux-saga/effects';
import productSaga from './productSagas';
import signUp from './userSagas';
import login from './loginSagas';

export default function* rootSaga(){
    yield all([
      productSaga(),
      signUp(),
      login(),
    ])
}