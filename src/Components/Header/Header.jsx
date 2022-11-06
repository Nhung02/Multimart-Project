/** @format */

import React from 'react';

import { NavLink } from 'react-router-dom';
import './Header.css';

import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';

import { Container, Row } from 'reactstrap';

const nav__links = [
  {
    path: '/',
    display: 'Home',
  },
  {
    path: '/shop',
    display: 'Shop',
  },
  {
    path: '/cart',
    display: 'Cart',
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container className="container">
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
                <p>Since 1990</p>
              </div>
            </div>

            <div className="navigation">
              <ul className="menu">
                {nav__links.map((item) => (
                  <li className="nav__item">
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'nav__active' : ''
                      }
                    >
                      {' '}
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
              </span>
              <span className="cart__icon">
                <i class="ri-shopping-bag-line"></i>
              </span>

              <span>
                <img src={userIcon} alt="" />
              </span>
            </div>

            <div className="mobile__menu"></div>
            <span>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
