import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const LargeWidget = ({ weather }) => (
  <Card className="weather-data-container">
    <CardContent>
      <Typography variant="headline" component="h2">
            Weather for
        {' '}
        {weather.data.name}
      </Typography>
      <Typography variant="headline" component="h2">
            Temperature:
        {' '}
        {weather.data.main.temp}
        {' '}
            Celsius
      </Typography>
    </CardContent>
  </Card>
);

LargeWidget.propTypes = {
  weather: PropTypes.shape({
    data: PropTypes.shape({
      main: PropTypes.shape({
        temp: PropTypes.number,
      }).isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default LargeWidget;
