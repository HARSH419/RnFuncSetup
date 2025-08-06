import {call, put, takeLatest} from 'redux-saga/effects';
import HTTPRequest from '../../../Util/HTTPRequest';
import { setUserInfoError, setUserInfo } from '../../Slice/getToken';
import { fetchUsersRequest } from '../../Slice/userSlice';


function* fetchLoginSaga(action) {
  try {
    const loginData = yield call(HTTPRequest.loginUser);
    yield put(setUserInfo(loginData));} catch (error) {
    yield put(setUserInfoError(error.message));
  }
}

function* fetchLogSaga() {
  yield takeLatest(fetchUsersRequest.type, fetchLoginSaga);
}

export default fetchLogSaga;
