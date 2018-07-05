import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


import * as authenticationActions from '../../actions/authenticationActions';

import './index.css';

export class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: props.authentication.isAuthenticated,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.authentication.isAuthenticated !== state.isAuthenticated) {
      return {
        isAuthenticated: props.authentication.isAuthenticated,
      };
    }
    return null;
  }

  handleInputChange = type => (event) => {
    const { value } = event.target;
    this.setState({
      [type]: value,
    });
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    this.props.actions.authenticate(email, password);
  }

  render() {
    return (
      <Paper>
        {this.state.isAuthenticated && <Redirect push to="/" />}
        <Typography variant="headline" component="h1">
          Welcome to Demo page
        </Typography>
        <Card className="login-container">
          <CardContent>
            <form autoComplete="off">
              <TextField
                required
                error={!!this.props.authentication.error}
                id="emailAddress"
                label="Email"
                onChange={this.handleInputChange('email')}
                autoComplete="email"
                className="login-input"
                helperText={!!this.props.authentication.error && 'Invalid user'}
              />
              <TextField
                required
                error={!!this.props.authentication.error}
                id="passwordField"
                label="Password"
                type="password"
                onChange={this.handleInputChange('password')}
                autoComplete="current-password"
                className="login-input"
                helperText={!!this.props.authentication.error && 'Invalid user'}
              />
            </form>
          </CardContent>
          <CardActions>
            <Button
              onClick={this.handleSubmit}
              size="medium"
              className="login-button"
            >
              Log in
            </Button>
          </CardActions>
        </Card>
      </Paper>
    );
  }
}

Root.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  authentication: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
  }).isRequired,

};

const mapStateToProps = state => ({
  authentication: state.authentication,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(authenticationActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Root);
