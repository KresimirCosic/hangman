import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthenticationState {
  username: string;
}

const initialState: AuthenticationState = {
  username: '',
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    logout: (state, action) => {
      state.username = '';
    },
  },
});

export const { login, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
