import { all } from 'redux-saga/effects';
import fetchLoginSaga from './Middleware/SagaApi/login.saga';

function* rootSaga() {
    yield all([
    //    GetStartSagas(),
       fetchLoginSaga()
    ]);
}

export default rootSaga;
