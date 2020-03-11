import React from 'react';

import IngredientsView from './IngredientsView';
import IngredientsEdit from './IngredientsEdit';
import './ingredients.sass';

export default class extends React.Component {
  handleEditClick = (itemId) => {
    this.props.onEditClick(itemId);
  };
  handleDeleteClick = (itemId) => {
    this.props.onDeleteClick(itemId);
  };
  render() {
    return this.props.editable
      ? (<IngredientsEdit
          ingredients={this.props.ingredients}
          onEditClick={this.handleEditClick}
          onDeleteClick={this.handleDeleteClick}/>)
      : (<IngredientsView ingredients={this.props.ingredients}/>);
  }
 }