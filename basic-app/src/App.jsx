import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import * as authenticationActions from './actions/authenticationActions';


import AppRoutes from './routes';


import logo from './logo.svg';
import './App.css';

export const App = ({ actions, authentication }) => {
  const { user } = authentication;
  return (
    <BrowserRouter>
      <div className="App">
        {user && (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            {`Welcome to the app, ${user.name}`}

          </h1>
          <div className="logout-button-container">
            <Button onClick={() => actions.invalidateUser()} style={{ color: '#fff' }}>
          Log out
            </Button>
          </div>

          <div className="navigation-container">
            <Link to="/">
              <Button style={{ color: '#fff' }}>
              Home
              </Button>
            </Link>
            <Link to="/weather">
              <Button style={{ color: '#fff' }}>
              Weather
              </Button>
            </Link>

          </div>

        </header>
        ) }
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = state => ({
  authentication: state.authentication,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(authenticationActions, dispatch),
});

App.propTypes = {
  actions: PropTypes.shape({
    invalidateUser: PropTypes.func.isRequired,
  }).isRequired,
  authentication: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
