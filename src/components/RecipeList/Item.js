import React from 'react';

import wordEnds from '../../helpers/wordEnds.js'
import cutText from '../../helpers/cutText.js'

import './item.sass'

export default function (props) {
  const item = props.item;
    return (
      <article className="recipe-list-item">
        <div className="recipe-list-img">
          <img src={item.img} alt={item.name}/>
        </div>
        <ul className="recipe-list-info">
          <div className="recipe-list-title">{cutText(24 ,item.name)}</div>
          <li>
            <i className="icon icon-list"></i><span>{item.ingredientNumber} ингр.</span>
          </li>
          <li>
            <i className="icon icon-time"></i><span>{item.time.hr}ч. {item.time.min}мин.</span>
          </li>
          <li>
            <i className="icon icon-plate"></i><span>{item.persons} {wordEnds(item.persons, ['порция', 'порции', 'порций'])}</span>
          </li>
        </ul>
      </article>
    );
}