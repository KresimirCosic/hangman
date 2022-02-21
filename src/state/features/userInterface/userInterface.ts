import { createSlice } from '@reduxjs/toolkit';

interface UserInterfaceState {
  appLoader: boolean;
}

const initialState: UserInterfaceState = {
  appLoader: false,
};

export const userInterfaceSlice = createSlice({
  name: 'userInterface',
  initialState,
  reducers: {
    turnAppLoaderOn: (state) => {
      state.appLoader = true;
    },
    turnAppLoaderOff: (state) => {
      state.appLoader = false;
    },
  },
});

export const { turnAppLoaderOn, turnAppLoaderOff } = userInterfaceSlice.actions;

export default userInterfaceSlice.reducer;
