import { FC } from 'react';

import { PossibleLetter } from '../../state/features/game/game';

import TextLetter from '../TextLetter/TextLetter';

interface ITextProps {
  text: string;
  correctLetters: PossibleLetter[];
}

const Text: FC<ITextProps> = ({ text, correctLetters }) => {
  return (
    <div id='Text' className='Text'>
      {text
        .split('')
        .map((textLetter) =>
          correctLetters.includes(textLetter as PossibleLetter) ? (
            <TextLetter textLetter={textLetter as PossibleLetter} />
          ) : (
            '_'
          )
        )}
    </div>
  );
};

export default Text;
