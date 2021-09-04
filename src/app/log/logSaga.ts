import { PayloadAction } from '@reduxjs/toolkit';
import { increment } from 'features/counter/counterSlice';
import { takeEvery } from 'redux-saga/effects';

function* log(action: PayloadAction) {
  console.log(increment().type);
  console.log('Log', action);
}

export default function* logSaga() {
  yield takeEvery('*', log);
}
