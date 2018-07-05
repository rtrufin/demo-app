import * as actionTypes from '../constants/actionTypes';

const initialState = {
  data: null,
  isFetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER_DATA_REQUESTED: {
      return {
        ...state,
        isFetching: true,
        error: null,
        data: null,

      };
    }
    case actionTypes.FETCH_WEATHER_DATA_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        data: action.response,
      };
    }
    case actionTypes.FETCH_WEATHER_DATA_FAILURE: {
      return {
        data: null,
        isFetching: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
