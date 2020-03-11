import React from 'react';

export default class extends React.Component {
  handleEditClick = (itemId) => {
    this.props.onEditClick(itemId);
  };
  handleDeleteClick = (itemId) => {
    this.props.onDeleteClick(itemId);
  };
  render() {
    return (
      <div className="ingredients">
        <ul className="list">
          {this.props.ingredients.map((item, index) => (
            <li key={item.id} className="list-item">
              <div className="list-num">{index + 1}.</div>
              <div className="list-content">
                <div className="list-text">{item.value}</div>
                <div className="list-actions">
                  <button onClick={() => this.handleEditClick(item.id)}>
                    <i className="icon icon-edit-brown"></i>
                  </button>
                  <button onClick={() => this.handleDeleteClick(item.id)}>
                    <i className="icon icon-delete-red"></i>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}