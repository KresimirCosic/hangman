import { FC } from 'react';

import { PossibleLetter } from '../../state/features/game/game';

interface ILetterProps {
  disabled: boolean;
  letter: PossibleLetter;
  handleLetterAttempt: (letter: PossibleLetter) => void;
}

const Letter: FC<ILetterProps> = ({
  disabled,
  letter,
  handleLetterAttempt,
}) => {
  return (
    <button
      disabled={disabled}
      className='Letter'
      onClick={() => handleLetterAttempt(letter)}
    >
      {letter}
    </button>
  );
};

export default Letter;
