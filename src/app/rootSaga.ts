import { all, fork } from 'redux-saga/effects';
import logSaga from './log/logSaga';
import counterSaga from '../features/counter/counterSaga';

function* helloSaga() {
  console.log('Saga start here!');
}

export default function* rootSaga() {
  yield all([fork(helloSaga), fork(logSaga), fork(counterSaga)]);
}
