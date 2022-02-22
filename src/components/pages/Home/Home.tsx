import { FC } from 'react';

import ProtectedRoute from '../../utility/ProtectedRoute/ProtectedRoute';
import Page from '../../utility/Page/Page';

import LettersList from '../../LettersList/LettersList';

const Home: FC = () => {
  return (
    <ProtectedRoute>
      <Page>
        <div id='Home' className='Home'>
          <LettersList />
        </div>
      </Page>
    </ProtectedRoute>
  );
};

export default Home;
