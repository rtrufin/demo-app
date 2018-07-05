import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { equals } from 'ramda';

import * as weatherActions from '../../actions/weatherActions';

import './index.css';
import LargeWidget from '../../components/weather/LargeWidget';

export class Root extends Component {
  constructor(props) {
    super(props);

    const { weather } = this.props;
    this.state = {
      weather,
    };
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.weather !== nextProps.weather) {
      return true;
    }
    return false;
  }


  static getDerivedStateFromProps(props, state) {
    if (!equals(props.weather, state.weather)) {
      return {
        weather: props.weather,
      };
    }
    return null;
  }


  handleInputChange = (event) => {
    this.setState({ city: event.target.value });
  }

  handleSubmit = () => {
    const { city } = this.state;
    this.props.actions.getWeather(city);
  }

  render() {
    const { city, weather } = this.state;
    return (
      <Paper>
        <Typography variant="headline" component="h1">
          Let&apos;s see the weather
        </Typography>
        <Card className="weather-container">
          <CardContent>
            <form autoComplete="off">
              <TextField
                required
                error={!!weather.error}
                id="sourceCity"
                label="City"
                onChange={this.handleInputChange}
                className="weather-city-input"
                helperText={!!weather.error && 'Invalid location'}
              />
            </form>
          </CardContent>
          <CardActions>
            <Button
              onClick={this.handleSubmit}
              size="medium"
              className="weather-read-button"
              variant="contained"
              color="primary"
            >
              Read Weather
            </Button>
          </CardActions>
        </Card>

        {weather.data
        && (<LargeWidget weather={weather} />
        )}
      </Paper>
    );
  }
}

Root.propTypes = {
  actions: PropTypes.shape({
    getWeather: PropTypes.func.isRequired,
  }).isRequired,
  weather: PropTypes.shape({
    data: PropTypes.shape({
    }),
    isFetching: PropTypes.bool,
    error: PropTypes.shape({
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  weather: state.weather,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(weatherActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Root);
