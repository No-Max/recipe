import React from 'react'
import { NavLink } from 'react-router-dom';

import './nav.sass'

import navImg from '../../img/icons/nav.svg';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    }
  }
  handleOnClick = () => {
    this.setState({isOpened: !this.state.isOpened});
  }
  render() {
    return (
      <div className="navigation">
        <div className={this.state.isOpened ? 'active' : ''}>
          <button onClick={this.handleOnClick}>
            <img src={navImg} alt="Open navigtion"/>
          </button>
          <nav>
            <NavLink  to="/" activeClassName='active'>
              Все рецепты
            </NavLink >
            <NavLink  to="/test" activeClassName='active'>
              Создать новый
            </NavLink >
            <NavLink  to="/test" activeClassName='active'>
              Ингредиенты
            </NavLink >
          </nav>
        </div>
      </div>
    );
  }
}