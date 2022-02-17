import { useState, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from './state/store';

import { login, logout } from './state/features/authentication/authentication';

const App = () => {
  const [loginUsername, setLoginUsername] = useState('');
  const { username } = useSelector((state: RootState) => state.authentication);
  const dispatch = useDispatch();

  const handleLoginUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginUsername(event.target.value);
  };

  const handleLogin = () => {
    dispatch(login(loginUsername));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className='App'>
      {username && <h1>{username}</h1>}
      <input
        type='text'
        value={loginUsername}
        onChange={(event) => handleLoginUsernameChange(event)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default App;
