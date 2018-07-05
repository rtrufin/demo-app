import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import storageManager from './utils/localStorage';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      storageManager.getItem('profile')
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login' }} />
    )}
  />
);

PrivateRoute.defaultProps = {
  location: {},
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({}),
};

export default PrivateRoute;
