import querystring from 'query-string';
import * as actionTypes from '../constants/actionTypes';
import { POST } from '../utils/http';
import api from '../config/api';

const authenticateUser = user => ({
  type: actionTypes.FETCH_USER_SUCCESS,
  user,
});

const authenticationStarted = () => ({
  type: actionTypes.FETCH_USER_REQUESTED,
});

const authenticationError = error => ({
  type: actionTypes.FETCH_USER_FAILURE,
  error,
});

export const authenticate = (email, password) => {
  const data = {
    email,
    password,
  };

  return (dispatch) => {
    dispatch(authenticationStarted());
    return POST(api.AUTHENTICATION, querystring.stringify(data), {
      'Content-Type': 'application/x-www-form-urlencoded',
    }).then((response) => {
      dispatch(authenticateUser(response));
    }).catch((error) => {
      dispatch(authenticationError(error));
    });
  };
};

export const invalidateUser = () => ({
  type: actionTypes.INVALIDATE_USER,
});

export default {
  authenticate,
  invalidateUser,
};
