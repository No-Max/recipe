import React from 'react';

import IngredientsView from './IngredientsView';
import IngredientsEdit from './IngredientsEdit';
import './ingredients.sass';

export default function (props) {
  return props.editable
    ? (<IngredientsEdit ingredients={props.ingredients}/>)
    : (<IngredientsView ingredients={props.ingredients}/>);
}