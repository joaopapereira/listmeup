import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './App';
import ListsView from 'features/lists/components/ListsView';
import NotFoundView from 'components/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ListsView} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
