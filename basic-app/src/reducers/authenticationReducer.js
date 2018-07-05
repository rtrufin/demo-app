import * as actions from '../constants/actionTypes';
import storeManager from '../utils/localStorage';

const profile = storeManager.getItem('profile');

const initialState = {
  isAuthenticated: !!(profile && Object.keys(profile).length > 0),
  isFetching: false,
  error: null,
  user: profile,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_USER_REQUESTED: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case actions.FETCH_USER_SUCCESS: {
      storeManager.setItem('profile', action.user.data);
      return {
        ...state,
        isAuthenticated: true,
        isFetching: false,
        user: action.user.data,
      };
    }
    case actions.FETCH_USER_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    case actions.INVALIDATE_USER: {
      storeManager.setItem('profile', null);

      return {
        ...initialState,
        user: null,
      };
    }
    default: {
      return state;
    }
  }
};
