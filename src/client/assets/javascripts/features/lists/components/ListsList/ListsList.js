import React, { Component, PropTypes } from 'react';

import ListsListItem from '../ListsListItem';
import './ListsList.scss';

export default class ListsList extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    lists: PropTypes.array.isRequired
  };

  renderList() {
    console.log('Render lists: ' + this.props.lists);
    console.log(this.props.lists)
    return this.props.lists.map((list) =>
      (
        <ListsListItem
          key={list.id}
          list={list}
          {...this.props.actions} />
      )
    );
  }

  render() {
    return (
      <ul className="listsList">
        {this.renderList()}
      </ul>
    );
  }
}
