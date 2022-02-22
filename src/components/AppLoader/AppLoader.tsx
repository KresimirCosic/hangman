import { FC } from 'react';

const AppLoader: FC = () => {
  return (
    <div id='AppLoader' className='AppLoader'>
      <div className='AppLoader-animation'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default AppLoader;
