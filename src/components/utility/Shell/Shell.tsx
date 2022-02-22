import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../Navbar/Navbar';

const Shell: FC = () => {
  return (
    <div id='Shell' className='Shell'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Shell;
