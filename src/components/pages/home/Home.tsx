import { FC } from 'react';

import ProtectedRoute from '../../utility/ProtectedRoute/ProtectedRoute';

const Home: FC = () => {
  return (
    <ProtectedRoute>
      <div id='Home' className='Home'>
        <h1>Home works!</h1>
      </div>
    </ProtectedRoute>
  );
};

export default Home;
