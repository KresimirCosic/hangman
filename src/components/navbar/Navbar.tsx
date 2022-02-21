import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

const Navbar: FC = () => {
  return (
    <div id='Navbar' className='Navbar'>
      <nav>
        <ul className='Navbar-list'>
          <li className='Navbar-list-item'>
            <NavLink className='Navbar-list-item-link' to={'/login'}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className='Navbar-list-item-link' to={'/'}>
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
