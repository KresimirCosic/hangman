import { FC } from 'react';

import { PossibleLetter } from '../../state/features/game/game';

interface ITextProps {
  text: string;
  correctLetters: PossibleLetter[];
}

const Text: FC<ITextProps> = ({ text, correctLetters }) => {
  return (
    <div id='Text' className='Text'>
      <h1>{text}</h1>
    </div>
  );
};

export default Text;
