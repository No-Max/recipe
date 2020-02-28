import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav.js';
import './index.sass';

import logoImg from '../../img/icons/logo.svg';
import plusImg from '../../img/icons/plus.svg';

export default function () {
  return (
    <div className="head">
      <div className="head-links">
        <Link to="/">
          <img src={logoImg} alt="Logo"/>
        </Link>
        <Link to="/">
          <img src={plusImg} alt="Add new"/>
        </Link>
      </div>
      <Nav />
    </div>
  );
}