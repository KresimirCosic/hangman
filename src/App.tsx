import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useAppSelector } from './state/hooks';

import AppLoder from './components/appLoader/AppLoader';

import Shell from './components/utility/Shell/Shell';

import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import NotFound from './components/pages/NotFound/NotFound';

const App: FC = () => {
  const { appLoader } = useAppSelector((state) => state.userInterface);

  return (
    <div id='App' className='App'>
      {appLoader && <AppLoder />}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Shell />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
