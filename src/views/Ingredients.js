import React from 'react';

import Content from '../components/Content';
import IngredientList from '../components/Ingredients'
import Search from '../components/Search';
import AddItemField from '../components/AddItemField';
import Dialog from '../components/Dialog'

let items = [
  {
    id: '1',
    value: 'Мука, 2 кг.'
  },
  {
    id: '2',
    value: 'Томат, 2шт.'
  },
  {
    id: '3',
    value: 'Соль, 1 щп.'
  },
];

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredList: items,
      isDialogVisible: false,
      changeInputValue: '',
      changeInputId: null
    };
  };
  handleListUpdate = (filteredList) => {
    this.setState({filteredList});
  }
  handleEditClick = (itemId) => {
    this.setState(() => {
      return {
        changeInputId: itemId,
        isDialogVisible: true,
        changeInputValue: items.find(item => item.id === itemId).value
      };
    });
  };
  handleDeleteClick = (itemId) => {
    // TODO: change to API calls logic
    items = items.filter(item => item.id !== itemId)
    this.setState({
      filteredList: items
    });
  };
  handleAddButtonClick = () => {
    // TODO: change to API calls logic
    if(this.state.changeInputValue) {
      const date = new Date();
      items.push({
        id: date.getTime(),
        value: this.state.changeInputValue
      });
      this.setState({
        filteredList: items,
        changeInputValue: ''
      });
    }
  }
  handleActionButtonClick = () => {
    this.setState({
      filteredList: items.map(item => {
        if (item.id === this.state.changeInputId) {
          item.value = this.state.changeInputValue
        }
        return item;
      })
    });
    this.setState({
      isDialogVisible: false,
      changeInputValue: ''
    });
  }
  handleCancelButtonClick = () => {
    this.setState({isDialogVisible: false});
  }
  handleInputChange = (value) => {
    this.setState({changeInputValue: value});
  }
  render(){
    return (
      <div>
        <Search list={items} onListUpdate={this.handleListUpdate}/>
        <Content>
          <AddItemField
            isLineInput={true}
            onInputChange={this.handleInputChange}
            onAddButtonClick={this.handleAddButtonClick}
            inputValue={this.state.changeInputValue}/>
          {this.state.filteredList.length < 1 ? (
            <div>Ваш сисок пуст</div>
          ) : (
            <IngredientList
              ingredients={this.state.filteredList}
              editable={true}
              onEditClick={this.handleEditClick}
              onDeleteClick={this.handleDeleteClick}/>
          )}
        </Content>
        <Dialog
          onActionButtonClick={this.handleActionButtonClick}
          onCancelButtonClick={this.handleCancelButtonClick}
          isVisible={this.state.isDialogVisible}
          actionButtonValue={'Сохранить'}>
          <AddItemField
            isLineInput={true}
            onInputChange={this.handleInputChange}
            hideButton={true}
            inputValue={this.state.changeInputValue}/>
        </Dialog>
      </div>
    );
  }
}