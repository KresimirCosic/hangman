import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { lettersList } from '../../../components/LettersList/LettersList';

export type PossibleLetter = typeof lettersList[number];

interface GameState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  text: string;
  wrongLetters: PossibleLetter[];
  correctLetters: PossibleLetter[];
}

const initialState: GameState = {
  status: 'idle',
  text: '',
  wrongLetters: [],
  correctLetters: [],
};

interface APIResponse {
  author: string;
  authorSlug: string;
  content: string;
  dateAdded: string;
  dateModified: string;
  length: number;
  tags: string[];
  _id: string;
}

export const getNewTextThunk = createAsyncThunk('game/getNewText', async () => {
  const response = await fetch('http://api.quotable.io/random');
  const data: APIResponse = await response.json();
  return data;
});

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    attempt: (state, action: PayloadAction<PossibleLetter>) => {
      const { payload } = action;

      if (payload.length > 1) return;
      if (
        state.text.indexOf(payload) > -1 &&
        !state.correctLetters.includes(payload)
      ) {
        state.correctLetters.push(payload);
      } else if (!state.wrongLetters.includes(payload)) {
        state.wrongLetters.push(payload);
      }
    },
    reset: (state) => {
      state = { ...initialState };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getNewTextThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        getNewTextThunk.fulfilled,
        (state, action: PayloadAction<APIResponse>) => {
          state.status = 'succeeded';
          state.text = action.payload.content;
        }
      )
      .addCase(getNewTextThunk.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { attempt, reset } = gameSlice.actions;

export default gameSlice.reducer;
