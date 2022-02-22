import { ChangeEvent, FC, FormEvent, useState } from 'react';

import { useAppDispatch } from '../../state/hooks';

import { loginThunk } from '../../state/features/authentication/authentication';

const LoginForm: FC = () => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginThunk(username));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <form
      id='LoginForm'
      className='LoginForm form'
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className='LoginForm-field-container form-field-container'>
        <input
          onChange={handleChange}
          type='text'
          className='LoginForm-field form-field'
          placeholder='Username'
          value={username}
        />
      </div>
      <div className='LoginForm-field-container'>
        <button className='LoginForm-submit' type='submit'>
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
