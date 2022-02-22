import { FC } from 'react';

import AnonymousRoute from '../../utility/AnonymousRoute/AnonymousRoute';
import Page from '../../utility/Page/Page';

const Login: FC = () => {
  return (
    <AnonymousRoute>
      <Page>
        <div id='Login' className='Login'>
          <h1>Login works!</h1>
        </div>
      </Page>
    </AnonymousRoute>
  );
};

export default Login;
