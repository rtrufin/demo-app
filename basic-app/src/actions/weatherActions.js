import * as actions from '../constants/actionTypes';
import { GET } from '../utils/http';

import api from '../config/api';

const fetchWeatherData = response => ({
  type: actions.FETCH_WEATHER_DATA_SUCCESS,
  response,
});

const fetchWeatherDataStarted = () => ({
  type: actions.FETCH_WEATHER_DATA_REQUESTED,
});

const fetchWeatherDataError = error => ({
  type: actions.FETCH_WEATHER_DATA_FAILURE,
  error,
});

export const getWeather = city => ((dispatch) => {
  dispatch(fetchWeatherDataStarted());
  return GET(`${api.WEATHER}q=${city}`).then((response) => {
    dispatch(fetchWeatherData(response.data));
  }).catch((error) => {
    dispatch(fetchWeatherDataError(error));
  });
});

export default {
  getWeather,
};
