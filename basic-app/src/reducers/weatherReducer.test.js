import weatherReducer from './weatherReducer';
import * as actionTypes from '../constants/actionTypes';

describe('weather reducer', () => {
  it('should handle FETCH_WEATHER_DATA_REQUESTED', () => {
    const fetchStartedAction = {
      type: actionTypes.FETCH_WEATHER_DATA_REQUESTED,
    };
    expect(weatherReducer({}, fetchStartedAction)).toEqual({
      data: null,
      isFetching: true,
      error: null,
    });
  });

  it('should handle FETCH_WEATHER_DATA_SUCCESS', () => {
    const mockResponse = {
      data: {
        test: 'testValue',
      },
    };
    const fetchStartedAction = {
      type: actionTypes.FETCH_WEATHER_DATA_SUCCESS,
      response: mockResponse,
    };
    expect(weatherReducer({}, fetchStartedAction)).toEqual({
      isFetching: false,
      data: mockResponse,
    });
  });
});
