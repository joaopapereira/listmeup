import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import friends, { NAME as friendsName } from 'features/friends';
import lists, { NAME as listsName } from 'features/lists';

export default combineReducers({
  routing,
  [friendsName]: friends,
  [listsName]: lists
});
