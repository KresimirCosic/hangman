import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <div id='Navbar' className='Navbar'>
      <ul>
        <li>
          <NavLink to={'/login'}>Login</NavLink>
        </li>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
