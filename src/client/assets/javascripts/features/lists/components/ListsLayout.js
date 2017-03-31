import React, { Component, PropTypes } from 'react';

import ListsList from './ListsList';
import './ListsListApp.scss';

export default class ListsLayout extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    lists: PropTypes.object.isRequired
  };

  render() {
    const { lists: { listsById }, actions } = this.props;

    return (
      <div className="listsListApp">
        <div className="row">
          <div className="col-xs-8">
            <h1>List That Up</h1>
          </div>
          <div className="cols-xs-4">
            <a href="/lists/add" style={{fontColor: "white"}}><i className="fa fa-plus-square-o fa-3x" aria-hidden="true"></i></a>
          </div>
        </div>
        <ListsList lists={listsById} actions={actions} />
      </div>
    );
  }
}
