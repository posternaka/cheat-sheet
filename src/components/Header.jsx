import React from 'react';
import logo from '../../src/logo.svg';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const nameRoute = ['Home', 'Virtualdom', 'Props', 'State', 'Lifecycle', 'Components', 'Hooks', 'Routes'];
  const navRoute = ['home', 'virtualdom', 'props', 'state', 'lifecycle', 'components', 'hooks', 'componentRoute'];

  return (
    
    <header>
      <div className="wrapper-header">
        <Link to="/home">
          <div className="header_logo">
              <img src={logo} height="40px" alt="Логотип React" />
              <p>React</p>
          </div>
        </Link>
        <nav>    
            <ul className="nav">
              {
                navRoute.map((route, index) => (
                  <NavLink key={route + index} to={route}>{nameRoute[index]}</NavLink>
                ))
              }
            </ul>
        </nav>
      </div>
    </header>
    
  )
}

export default Header