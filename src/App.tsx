import { useAppSelector } from './state/hooks';

import AppLoder from './components/appLoader/AppLoader';

const App = () => {
  const { appLoader } = useAppSelector((state) => state.userInterface);

  return (
    <div id='App' className='App'>
      {appLoader && <AppLoder />}
    </div>
  );
};

export default App;
