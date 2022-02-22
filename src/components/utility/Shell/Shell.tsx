import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Shell: FC = () => {
  return (
    <div id='Shell' className='Shell'>
      <Outlet />
    </div>
  );
};

export default Shell;
