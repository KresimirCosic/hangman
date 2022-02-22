import { FC } from 'react';

import AnonymousRoute from '../../utility/AnonymousRoute/AnonymousRoute';

const Login: FC = () => {
  return (
    <AnonymousRoute>
      <div id='Login' className='Login'>
        <h1>Login works!</h1>
      </div>
    </AnonymousRoute>
  );
};

export default Login;
