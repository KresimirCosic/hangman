import { createSlice } from '@reduxjs/toolkit';

import { getNewTextThunk } from '../game/game';

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
      .addCase(getNewTextThunk.pending, (state) => {
        state.appLoader = true;
      })
      .addCase(getNewTextThunk.fulfilled, (state) => {
        state.appLoader = false;
      })
      .addCase(getNewTextThunk.rejected, (state) => {
        state.appLoader = false;
      });
  },
});

export const { turnAppLoaderOn, turnAppLoaderOff } = userInterfaceSlice.actions;

export default userInterfaceSlice.reducer;
