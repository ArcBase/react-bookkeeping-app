import React from 'react';

export default class TableHeaderCell extends React.Component {

  render() {
    const {  children } = this.props;
    const action = this.props.action ? this.props.action : '';
    return (
      <div className="table-header-cell">
        {children}
        { action &&
          <a onClick={action}><i className="fas fa-sort"></i></a>
        }
      </div>
    )
  }

}
