import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import api from '../config/api';


import * as weatherActions from './weatherActions';
import * as actions from '../constants/actionTypes';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('weather actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates FETCH_WEATHER_DATA_SUCCESS when fetching has been done', () => {
    const city = 'London';
    moxios.stubRequest(`${api.WEATHER}q=${city}`, {
      status: 200,
      response: { data: { temp: 20 } },
    });

    const expectedActions = [
      { type: actions.FETCH_WEATHER_DATA_REQUESTED },
      { type: actions.FETCH_WEATHER_DATA_SUCCESS, response: { data: { temp: 20 } } },
    ];
    const store = mockStore({ weather: {} });

    return store.dispatch(weatherActions.getWeather(city)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates FETCH_WEATHER_DATA_SUCCESS when fetching has been done', () => {
    const city = 'Londonasdsad';

    const error = new Error('Request failed with status code 401');

    moxios.stubRequest(`${api.WEATHER}q=${city}`, {
      status: 401,
      response: { error },
    });

    const expectedActions = [
      { type: actions.FETCH_WEATHER_DATA_REQUESTED },
      { type: actions.FETCH_WEATHER_DATA_FAILURE, error },
    ];
    const store = mockStore({ weather: {} });

    return store.dispatch(weatherActions.getWeather(city)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
