import React from 'react';

import DescriptionView from './DescriptionView';
import DescriptionEdit from './DescriptionEdit';

export default function (props) {
  return props.editable
    ? (<DescriptionEdit description={props.description}/>)
    : (<DescriptionView description={props.description}/>);
}