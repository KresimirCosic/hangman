import { FC } from 'react';

import { PossibleLetter } from '../../state/features/game/game';

import Letter from '../Letter/Letter';

interface ILettersListProps {
  handleLetterAttempt: (letter: PossibleLetter) => void;
}

export const lettersList = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
] as const;

const LettersList: FC<ILettersListProps> = ({ handleLetterAttempt }) => {
  return (
    <ul id='LettersList' className='LettersList'>
      {lettersList.map((letter) => (
        <li key={letter} className='LettersList-item'>
          <Letter handleLetterAttempt={handleLetterAttempt} letter={letter} />
        </li>
      ))}
    </ul>
  );
};

export default LettersList;
