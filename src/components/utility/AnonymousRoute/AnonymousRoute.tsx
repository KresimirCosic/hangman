import { FC } from 'react';
import { Route } from 'react-router-dom';

import { useAppSelector } from '../../../state/hooks';

const AnonymousRoute: FC = ({ children }) => {
  const { username } = useAppSelector((state) => state.authentication);

  return <div className='AnonymousRoute'>{children}</div>;
};

export default AnonymousRoute;
