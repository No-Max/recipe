import React from 'react';
import './index.sass'

export default class extends React.Component {
  handleInputChange = (e) => {
    this.props.onInputChange(e.target.value);
  }
  handleAddButtonClick = () => {
    this.props.onAddButtonClick();
  }
  render() {
    const inputValue = this.props.inputValue;
    return (
      <div className="add-item">
        {this.props.isLineInput ? (
          <input
            className="add-item-input"
            placeholder="Введите текст..."
            value={inputValue}
            onChange={this.handleInputChange}/>
        ) : (
          <textarea
            className="add-item-textarea"
            placeholder="Введите текст..."
            value={inputValue}
            onChange={this.handleInputChange}/>
        )}
        {!this.props.hideButton && (
          <button
            className="add-item-button"
            onClick={this.handleAddButtonClick}>
            <i className="icon icon-add-new"></i>
          </button>
        )}
      </div>
    );
  }
}