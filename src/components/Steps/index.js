import React from 'react';

import StepsView from './StepsView';
import StepsEdit from './StepsEdit';
import './steps.sass';

export default function (props) {
  return props.editable
    ? (<StepsEdit steps={props.steps}/>)
    : (<StepsView steps={props.steps}/>);
}