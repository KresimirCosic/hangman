import { FC } from 'react';

import AnonymousRoute from '../../utility/AnonymousRoute/AnonymousRoute';
import Page from '../../utility/Page/Page';

import LoginForm from '../../LoginForm/LoginForm';

const Login: FC = () => {
  return (
    <AnonymousRoute>
      <Page>
        <div id='Login' className='Login'>
          <LoginForm />
        </div>
      </Page>
    </AnonymousRoute>
  );
};

export default Login;
