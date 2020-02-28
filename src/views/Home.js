import React from 'react';

import Content from '../components/Content';
import RecipeList from '../components/RecipeList';
import Search from '../components/Search';

const items = [
  {
    id: '1',
    img:'images/cake.png',
    name: 'Шоколадный тортик “Сказка”',
    ingredientNumber: 5,
    time: {
      hr: 1,
      min: 45,
    },
    persons: 1,
  },
  {
    id: '2',
    img:'images/cake.png',
    name: 'Тортик “Медовик”',
    ingredientNumber: 5,
    time: {
      hr: 1,
      min: 45,
    },
    persons: 3,
  },
  {
    id: '3',
    img:'images/cake.png',
    name: 'Яблочный пирожок “Весна в сенях”',
    ingredientNumber: 5,
    time: {
      hr: 1,
      min: 45,
    },
    persons: 6,
  },
  {
    id: '4',
    img:'images/cake.png',
    name: 'Яблочный пирожок “Весна в сенях”',
    ingredientNumber: 5,
    time: {
      hr: 1,
      min: 45,
    },
    persons: 6,
  },
];

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredList: items,
      noItems: false,
    };
  };
  handleListUpdate = (filteredList) => {
    this.setState({filteredList});
    this.setState({noItems: filteredList.length < 1});
  }
  render(){
    return (
      <div>
        <Search list={items} onListUpdate={this.handleListUpdate}/>
        <Content>
          {this.state.noItems ? (
            <div>Ничего не найдено по вашему запросу</div>
          ) : (
            <RecipeList items={this.state.filteredList}/>
          )}
        </Content>
      </div>
    );
  }
}