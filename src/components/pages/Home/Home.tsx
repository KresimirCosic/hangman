import { FC } from 'react';

import ProtectedRoute from '../../utility/ProtectedRoute/ProtectedRoute';
import Page from '../../utility/Page/Page';

const Home: FC = () => {
  return (
    <ProtectedRoute>
      <Page>
        <div id='Home' className='Home'>
          <h1>Home works!</h1>
        </div>
      </Page>
    </ProtectedRoute>
  );
};

export default Home;
