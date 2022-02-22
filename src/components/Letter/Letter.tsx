import { FC } from 'react';

import { PossibleLetter } from '../../state/features/game/game';

interface ILetterProps {
  letter: PossibleLetter;
}

const Letter: FC<ILetterProps> = ({ letter }) => {
  return <button className='Letter'>{letter}</button>;
};

export default Letter;
