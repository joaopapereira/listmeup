import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { actionCreators as listsActions, selector } from '../';
import ListsLayout from './ListsLayout';

@connect(selector, (dispatch) => ({
  actions: bindActionCreators(listsActions, dispatch)
}))
export default class ListsView extends Component {
  render() {
    return (
      <div>
        <ListsLayout {...this.props} />
      </div>
    );
  }
}
