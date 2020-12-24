import { takeLatest, put, select, call } from 'redux-saga/effects';
import Api from '../../../utils/Api';
import { makeSelectToken } from '../../../Others/App/selectors';
import * as types from './constants';
import * as actions from './actions';
import { enqueueSnackbar } from '../../../Others/App/actions';

function* saveContact(action) {
  const token = yield select(makeSelectToken());
  yield call(
    Api.post(
      'contact',
      actions.saveContactSuccess,
      actions.saveContactFailure,
      action.payload,
      token,
    ),
  );
}


function* saveSuccessfunc(action) {
  const snackbarData = {
    message: 'Contact Saved Succesfully',
    options: {
      variant: 'success',
    },
  };
  yield put(enqueueSnackbar(snackbarData));
}

function* saveFailureFunc(action) {
  const snackbarData = {
    message: 'Error Please Try Again',
    options: {
      variant: 'warning',
    },
  };
  yield put(enqueueSnackbar(snackbarData));
}

export default function* defaultSaga() {
  yield takeLatest(types.SAVE_CONTACT_REQUEST, saveContact);
  yield takeLatest(types.SAVE_CONTACT_SUCCESS, saveSuccessfunc);
  yield takeLatest(types.SAVE_CONTACT_FAILURE, saveFailureFunc);
}
