import { configureStore } from '@reduxjs/toolkit';

import authenticationReducer from './features/authentication/authentication';
import userInterfaceReducer from './features/userInterface/userInterface';
import gameReducer from './features/game/game';

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    userInterface: userInterfaceReducer,
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
