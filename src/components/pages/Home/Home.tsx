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
import AppLoader from '../../AppLoader/AppLoader';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { status, text, correctLetters, wrongLetters } = useAppSelector(
    (state) => state.game
  );
  const { appLoader } = useAppSelector((state) => state.userInterface);

  const handleLetterAttempt = (letter: PossibleLetter) => {
    dispatch(attempt(letter));
  };

  const isGameLost = () => {
    return wrongLetters.length > 5;
  };

  const isGameWon = () => {
    return (
      status === 'succeeded' &&
      text.split('').every((textLetter) => {
        return correctLetters.find((letter) =>
          letter.includes(textLetter as PossibleLetter)
        );
      })
    );
  };

  const isGameOver = () => {
    return status === 'succeeded' && (isGameLost() || isGameWon());
  };

  return (
    <ProtectedRoute>
      <Page>
        <div id='Home' className='Home'>
          {appLoader && <AppLoader />}

          {status !== 'loading' && !text && (
            <button
              className='Home-start'
              onClick={() => dispatch(getNewTextThunk())}
            >
              Start game
            </button>
          )}

          {text && <Text text={text} correctLetters={correctLetters} />}

          {text && !isGameOver() && (
            <LettersList
              correctLetters={correctLetters}
              wrongLetters={wrongLetters}
              handleLetterAttempt={handleLetterAttempt}
            />
          )}

          {isGameWon() && <h1>You won!</h1>}

          {isGameOver() && (
            <button
              className='Home-reset'
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
