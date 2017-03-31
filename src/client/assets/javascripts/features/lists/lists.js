// @flow

import { createStructuredSelector } from 'reselect';

import { State } from 'models/lists';

// Action Types

// Define types in the form of 'npm-module-or-myapp/feature-name/ACTION_TYPE_NAME'


// This will be used in our root reducer and selectors

export const NAME = 'lists';

// Define the initial state for `lists` module

const initialState: State = {
  lists: [0],
  listsById: [
    { id: 0,
      name: "bamm"
    }
  ]
};

// Reducer

/**
 * Another clever approach of writing reducers:
 *
 * export default function(state = initialState, action) {
 *   const actions = {
 *      [ACTION_TYPE]: () => [action.payload.data, ...state]
 *   };
 *
 *   return (_.isFunction(actions[action.type])) ? actions[action.type]() : state
 * }
 */

export default function reducer(state: State = initialState, action: any = {}): State {
  switch (action.type) {
    default:
    console.log("state = " + JSON.stringify(state));
      return state;
  }
  console.log("bamm");
}

// Action Creators


// Selectors

const lists = (state) => state[NAME];

export const selector = createStructuredSelector({
  lists
});

export const actionCreators = {
};
