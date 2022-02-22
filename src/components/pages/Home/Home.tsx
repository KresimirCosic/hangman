import { FC } from 'react';

import { useAppSelector, useAppDispatch } from '../../../state/hooks';

import { PossibleLetter, attempt } from '../../../state/features/game/game';

import ProtectedRoute from '../../utility/ProtectedRoute/ProtectedRoute';
import Page from '../../utility/Page/Page';

import LettersList from '../../LettersList/LettersList';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { status, text, numberOfTries, correctLetters, wrongLetters } =
    useAppSelector((state) => state.game);

  const handleLetterAttempt = (letter: PossibleLetter) => {
    dispatch(attempt(letter));
  };

  return (
    <ProtectedRoute>
      <Page>
        <div id='Home' className='Home'>
          <LettersList handleLetterAttempt={handleLetterAttempt} />
        </div>
      </Page>
    </ProtectedRoute>
  );
};

export default Home;
