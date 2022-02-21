import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface AuthenticationState {
  username: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: AuthenticationState = {
  username: '',
  status: 'idle',
};

type APIResponse = {
  content: string;
};

export const getContent = createAsyncThunk('word/getNewWord', async () => {
  const response = await fetch('http://api.quotable.io/random');
  const data: APIResponse = await response.json();
  return data;
});

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    logout: (state) => {
      state.username = '';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getContent.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getContent.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.username = action.payload.content;
      })
      .addCase(getContent.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { login, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
