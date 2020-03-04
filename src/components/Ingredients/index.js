import React from 'react';

import IngredientsView from './IngredientsView';
import IngredientsEdit from './IngredientsEdit';

export default function (props) {
  return props.editable
    ? (<IngredientsEdit ingredients={props.ingredients}/>)
    : (<IngredientsView ingredients={props.ingredients}/>);
}