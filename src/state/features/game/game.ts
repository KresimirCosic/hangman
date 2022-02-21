import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export type PossibleLetter =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z';

interface GameState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  text: string;
  wrongLetters: PossibleLetter[];
  correctLetters: PossibleLetter[];
  numberOfTries: number;
}

const initialState: GameState = {
  status: 'idle',
  text: '',
  wrongLetters: [],
  correctLetters: [],
  numberOfTries: 0,
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

export const getNewText = createAsyncThunk('game/getNewText', async () => {
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
      if (state.text.indexOf(payload) > -1) state.correctLetters.push(payload);
      else state.wrongLetters.push(payload);
    },
    reset: (state) => {
      state = { ...initialState };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getNewText.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        getNewText.fulfilled,
        (state, action: PayloadAction<APIResponse>) => {
          state.status = 'succeeded';
          state.text = action.payload.content;
        }
      )
      .addCase(getNewText.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { attempt, reset } = gameSlice.actions;

export default gameSlice.reducer;
