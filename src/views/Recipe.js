import React from 'react';

import Content from '../components/Content';
import Description from '../components/Description';
import Ingredients from '../components/Ingredients';
import Steps from '../components/Steps';
import Dialog from '../components/Dialog'

const item = {
  id: '1',
  description:{
    img:'images/cake.png',
    name: 'Шоколадный тортик “Сказка”',
    time: {
      hr: 1,
      min: 50,
    },
    persons: 4,
    text:'Купить свежие продукты, бум бум обязательно вымыть руки и побриться',
  },
  ingredients: [
    { id: '1', value: 'Мука, 200 гр.' },
    { id: '2', value: 'Яйца, 2 шт.' },
    { id: '3', value: 'Молоко, 150 гр.' },
  ],
  steps: [
    { id: '1', value: 'Смешать муку, молоко и яйца - взбивать 10 минут, пока не получится кисель.' },
    { id: '2', value: 'Смешать муку, молоко и яйца - взбивать 10 минут, пока не получится кисель.' },
  ],
};

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.match.params.id
    this.state = {
      isDialogVisible: false,
    };
  }
  onActionButtonClick = () => {
    console.log('item has been removed')
    this.setState({isDialogVisible: false});
  }
  onCancelButtonClick = () => {
    this.setState({isDialogVisible: false});
  }
  handleRemoveButtonClick = () => {
    this.setState({isDialogVisible: true});
  }
  render(){
    return (
      <div>
        <div className="page-title">
          {item.description.name}
        </div>
        <Content>
          <Description description={item.description} editable={false} />
          <Ingredients ingredients={item.ingredients} editable={false} />
          <Steps steps={item.steps} editable={false} />
        </Content>
        <div className="button-container">
          <button onClick={this.handleRemoveButtonClick}>
            <i className="icon icon-delete-white"></i><span>Удалить</span>
          </button>
          <button>
            <i className="icon icon-edit-white"></i><span>Редакт.</span>
          </button>
        </div>
        <Dialog
          onActionButtonClick={this.onActionButtonClick}
          onCancelButtonClick={this.onCancelButtonClick}
          isVisible={this.state.isDialogVisible}
          actionButtonValue={'Да, удалить'}>
          Вы уверены?
        </Dialog>
      </div>
    );
  }
}