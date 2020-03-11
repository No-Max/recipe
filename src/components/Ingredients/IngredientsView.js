import React from 'react';

export default function(props) {
  return (
    <div className="ingredients">
      <div className="list-title">
        Ингредиенты:
      </div>
      <ul className="list">
        {props.ingredients.map((item, index) => (
          <li key={item.id} className="list-item">
            <div className="list-num">{index + 1}.</div>
            <div className="list-content">
              <div className="list-text">{item.value}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}