import { FC } from 'react';

const Page: FC = ({ children }) => {
  return (
    <div id='Page' className='Page'>
      {children}
    </div>
  );
};

export default Page;
