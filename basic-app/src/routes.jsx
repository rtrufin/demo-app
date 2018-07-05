import React from 'react';
import { Route, Switch } from 'react-router';
import PrivateRoute from './PrivateRoute';

import Homepage from './pages/homepage';
import WeatherRoot from './pages/weather';
import LoginRoot from './pages/login';
import NotFoundPage from './pages/notFound';

const privateRoutes = [
  {
    id: 'homepage',
    path: '/',
    component: Homepage,
    title: 'Demo App',
    exact: true,
  },
  {
    id: 'weather',
    path: '/weather',
    component: WeatherRoot,
    title: 'Weather',
  },
];

const publicRoutes = [
  {
    id: 'login',
    path: '/login',
    component: LoginRoot,
    title: 'Login',
  },
];

const AppRoutes = () => {
  const appRoutes = [];

  privateRoutes.map(route => (
    appRoutes.push(<PrivateRoute
      key={route.id}
      {...route}
    />)
  ));

  publicRoutes.map(route => (
    appRoutes.push(<Route
      key={route.id}
      {...route}
    />)
  ));

  appRoutes.push(<Route key="404-page" component={NotFoundPage} />);

  return (
    <Switch>
      {appRoutes}
    </Switch>
  );
};

export default AppRoutes;
