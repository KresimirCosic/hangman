import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../../state/hooks';

const ProtectedRoute: FC = ({ children }) => {
  const { username } = useAppSelector((state) => state.authentication);

  if (username) {
    return <div className='ProtectedRoute'>{children}</div>;
  }

  return <Navigate to='/login' />;
};

export default ProtectedRoute;
