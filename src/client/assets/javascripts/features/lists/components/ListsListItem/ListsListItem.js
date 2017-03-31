import React, { Component, PropTypes } from 'react';

import './ListsListItem.scss';

export default class ListsListItem extends Component {
  static propTypes = {
    list: PropTypes.object.isRequired
  };
  constructor() {
    super();
    this.state = {expanded: false};
  }


  expandedView() {
    if(!this.state.expanded) {
      return '';
    } else {
      return (
      <div className="row">
        <div className="col-xs-7">
          piteco
        </div>
        <div className="col-xs-3">
          small image
        </div>
      </div>
      );
    }
  }

  expandedIcon() {
    if(!this.state.expanded) {
      return (
        <i className="fa fa-list" aria-hidden="true"></i>
      );
    }
    return (
      <i className="fa fa-minus-square-o" aria-hidden="true"></i>
    );
  }

  render() {
    return (
      <li className="listsListItem">
        <div>
          <div className="row">
            {this.props.list.name} <a onClick={() => this.setState({expanded: !this.state.expanded})}>{this.expandedIcon()}</a>
          </div>
          {this.expandedView()}
        </div>
      </li>
    );
  }
}
