import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthenticationState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  username: string;
}

const initialState: AuthenticationState = {
  status: 'idle',
  username: '',
};

export const loginThunk = createAsyncThunk(
  'authentication/login',
  async (username: string) => {
    const data: string = await new Promise((resolve) => {
      setTimeout(() => resolve(username), 500);
    });

    return data;
  }
);

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
  extraReducers(builder) {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginThunk.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = 'succeeded';
        state.username = action.payload;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { login, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
