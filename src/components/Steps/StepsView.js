import React from 'react';

export default function(props) {
  return (
    <div className="steps">
      <div className="list-title">
        Последовательность:
      </div>
      <ul className="list">
        {props.steps.map((item, index) => (
          <li key={item.id} className="list-item">
            <div className="list-num">{index + 1}.</div>
            <div className="list-text">{item.value}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}