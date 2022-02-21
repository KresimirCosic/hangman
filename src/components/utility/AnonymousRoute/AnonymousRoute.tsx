import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../../state/hooks';

const AnonymousRoute: FC = ({ children }) => {
  const { username } = useAppSelector((state) => state.authentication);

  if (!username) return <div className='AnonymousRoute'>{children}</div>;

  return <Navigate to='/' />;
};

export default AnonymousRoute;
