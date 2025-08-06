import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import TokenSlice from './Slice/getToken';
import userReducer from './Slice/userSlice';
// import downloadFiles_slice from './Slice/downloadFiles_slice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: userReducer,
    token: TokenSlice,
    // downloadFiles_slice,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 417},
      //serializableCheck: { warnAfter: 417 },
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
