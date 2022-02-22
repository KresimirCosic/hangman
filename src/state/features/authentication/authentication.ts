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
    const data = await new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        username ? resolve(username) : reject('No username provided');
      }, 500);
    });

    return data;
  }
);

export const logoutThunk = createAsyncThunk(
  'authentication/logout',
  async () => {
    const data = await new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 500);
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
      })
      .addCase(logoutThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.status = 'succeeded';
        state.username = '';
      })
      .addCase(logoutThunk.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { login, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
