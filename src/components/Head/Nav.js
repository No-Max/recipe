import React from 'react'
import onClickOutside from 'react-onclickoutside'
import { NavLink } from 'react-router-dom';

import routes from '../../routes.js';

import './nav.sass'

import navImg from '../../img/icons/nav.svg';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    }
  }
  handleOnClick = () => {
    this.setState({isOpened: !this.state.isOpened});
  }
  handleClickOutside = () => {
    this.setState({isOpened: false});
  }
  render() {
    return (
      <div className="navigation">
        <div className={this.state.isOpened ? 'active' : ''}>
          <button onClick={this.handleOnClick}>
            <img src={navImg} alt="Open navigtion"/>
          </button>
          <nav>
            {routes.map((route, index) => {
              return route.showInMenu && (
                <NavLink key={index} exact to={route.path} activeClassName='active'>
                  {route.pageTitle}
                </NavLink >
              )}
            )}
          </nav>
        </div>
      </div>
    );
  }
}

export default onClickOutside(Nav);