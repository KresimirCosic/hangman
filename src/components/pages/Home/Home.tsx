import { FC } from 'react';

import { useAppSelector, useAppDispatch } from '../../../state/hooks';

import {
  attempt,
  reset,
  getNewTextThunk,
  PossibleLetter,
} from '../../../state/features/game/game';

import ProtectedRoute from '../../utility/ProtectedRoute/ProtectedRoute';
import Page from '../../utility/Page/Page';

import LettersList from '../../LettersList/LettersList';
import Text from '../../Text/Text';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { text, correctLetters, wrongLetters } = useAppSelector(
    (state) => state.game
  );

  const handleLetterAttempt = (letter: PossibleLetter) => {
    dispatch(attempt(letter));
  };

  return (
    <ProtectedRoute>
      <Page>
        <div id='Home' className='Home'>
          {!text && (
            <button onClick={() => dispatch(getNewTextThunk())}>
              Start game
            </button>
          )}
          <h1>{text}</h1>
          {text && <Text />}
          {text && (
            <LettersList
              correctLetters={correctLetters}
              wrongLetters={wrongLetters}
              handleLetterAttempt={handleLetterAttempt}
            />
          )}
          {wrongLetters.length > 5 && (
            <button
              onClick={() => {
                dispatch(reset());
                dispatch(getNewTextThunk());
              }}
            >
              Reset game
            </button>
          )}
        </div>
      </Page>
    </ProtectedRoute>
  );
};

export default Home;
