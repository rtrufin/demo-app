export default {
  AUTHENTICATION: `${process.env.REACT_APP_AUTHENTICATION_API}/authenticate`,
  WEATHER: `${process.env.REACT_APP_WEATHER_API}/?appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric&`,
};
