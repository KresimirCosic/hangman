import { FC } from 'react';

import Letter from '../Letter/Letter';

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

const LettersList: FC = () => {
  return (
    <ul id='LettersList' className='LettersList'>
      {lettersList.map((letter) => (
        <li key={letter} className='LettersList-item'>
          <Letter letter={letter} />
        </li>
      ))}
    </ul>
  );
};

export default LettersList;
