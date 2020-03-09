import React from 'react';
import './index.sass';

export default class extends React.Component {
  handleActionButtonClick = () => {
    this.props.onActionButtonClick();
  }
  handleCancelButtonClick = () => {
    this.props.onCancelButtonClick();
  }
  render() {
    return (
      <div className={this.props.isVisible ? 'modal active' : 'modal'}>
        <div className="modal-container">
          <div className="modal-content">
            {this.props.children}
          </div>
          <div className="button-container">
            <button onClick={this.handleCancelButtonClick}>
              Отмена
            </button>
            <button onClick={this.handleActionButtonClick}>
              {this.props.actionButtonValue || 'Ок'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}