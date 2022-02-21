import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useAppSelector } from './state/hooks';

import AppLoder from './components/appLoader/AppLoader';
import Navbar from './components/navbar/Navbar';

import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';

const App: FC = () => {
  const { appLoader } = useAppSelector((state) => state.userInterface);

  return (
    <div id='App' className='App'>
      {appLoader && <AppLoder />}

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
