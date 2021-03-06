import * as actionTypes from '../constants/actionTypes';
import storeManager from '../utils/localStorage';

const profile = storeManager.getItem('profile');

const initialState = {
  isAuthenticated: !!(profile),
  isFetching: false,
  error: null,
  user: profile || null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_REQUESTED: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case actionTypes.FETCH_USER_SUCCESS: {
      storeManager.setItem('profile', action.user.data);
      return {
        ...state,
        isAuthenticated: true,
        isFetching: false,
        user: action.user.data,
      };
    }
    case actionTypes.FETCH_USER_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    case actionTypes.INVALIDATE_USER: {
      storeManager.setItem('profile', null);

      return {
        ...initialState,
        isAuthenticated: false,
        user: null,
      };
    }
    default: {
      return state;
    }
  }
};
