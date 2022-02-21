import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthenticationState {
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
      state.username = action.payload.trim();
    },
    logout: (state) => {
      state.username = '';
    },
  },
});

export const { login, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
