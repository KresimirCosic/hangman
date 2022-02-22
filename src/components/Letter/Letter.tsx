import { FC } from 'react';

import { PossibleLetter } from '../../state/features/game/game';

interface ILetterProps {
  letter: PossibleLetter;
  handleLetterAttempt: (letter: PossibleLetter) => void;
}

const Letter: FC<ILetterProps> = ({ letter, handleLetterAttempt }) => {
  return (
    <button className='Letter' onClick={() => handleLetterAttempt(letter)}>
      {letter}
    </button>
  );
};

export default Letter;
