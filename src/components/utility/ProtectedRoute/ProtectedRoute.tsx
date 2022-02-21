import { FC } from 'react';
import { Route } from 'react-router-dom';

import { useAppSelector } from '../../../state/hooks';

const ProtectedRoute: FC = ({ children }) => {
  const { username } = useAppSelector((state) => state.authentication);

  return <div className='ProtectedRoute'>{children}</div>;
};

export default ProtectedRoute;
