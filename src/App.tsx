import { useState, ChangeEvent } from 'react';

import { useAppDispatch, useAppSelector } from './state/hooks';

import {
  login,
  logout,
  getContent,
} from './state/features/authentication/authentication';

const App = () => {
  const [loginUsername, setLoginUsername] = useState('');
  const { username } = useAppSelector((state) => state.authentication);
  const dispatch = useAppDispatch();

  const handleLoginUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginUsername(event.target.value);
  };

  const handleLogin = () => {
    dispatch(login(loginUsername));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleGetContent = () => {
    dispatch(getContent());
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
      <button onClick={handleGetContent}>Get content</button>
    </div>
  );
};

export default App;
