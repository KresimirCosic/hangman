import { createSlice } from '@reduxjs/toolkit';

import { getNewText } from '../game/game';

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
  extraReducers(builder) {
    builder
      .addCase(getNewText.pending, (state) => {
        state.appLoader = true;
      })
      .addCase(getNewText.fulfilled, (state) => {
        state.appLoader = false;
      })
      .addCase(getNewText.rejected, (state) => {
        state.appLoader = false;
      });
  },
});

export const { turnAppLoaderOn, turnAppLoaderOff } = userInterfaceSlice.actions;

export default userInterfaceSlice.reducer;
