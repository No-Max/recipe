import React from 'react';

import Item from './Item'

export default function RecipeList (props) {
  const items = props.items;
    return (
      items.map((item) => {
        return <Item item={item} key={item.id}/>
      })
    );
}