import { FC } from 'react';

import { PossibleLetter } from '../../state/features/game/game';

interface ITextLetterProps {
  textLetter: PossibleLetter;
}

const TextLetter: FC<ITextLetterProps> = ({ textLetter }) => {
  return (
    <span className='TextLetter'>
      <strong>{textLetter}</strong>
    </span>
  );
};

export default TextLetter;
