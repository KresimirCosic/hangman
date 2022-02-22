import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Shell from './components/utility/Shell/Shell';

import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import NotFound from './components/pages/NotFound/NotFound';

const App: FC = () => {
  return (
    <div id='App' className='App'>
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
