import React from 'react';

import wordEnds from '../../helpers/wordEnds.js'

export default function(props) {
  return (
    <div className="description">
      <ul className="description-info">
        <li>
          <i className="icon icon-time"></i><span>{props.description.time.hr}ч. {props.description.time.min}мин.</span>
        </li>
        <li>
          <i className="icon icon-plate"></i><span>{props.description.persons} {wordEnds(props.description.persons, ['порция', 'порции', 'порций'])}</span>
        </li>
      </ul>
      <div className="description-img">
        <img src={props.description.img} alt={props.description.name}/>
      </div>
      <div className="description-text">
        {props.description.text}
      </div>
    </div>
  )
}