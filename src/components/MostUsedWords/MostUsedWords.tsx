import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';

import { TMostUsedWords } from './types';

const MostUsedWords = ({ words }: TMostUsedWords) => (
  <ul>
    {words.map((word) => (
      <li key={word}>{capitalizeFirstLetter(word)}</li>
    ))}
  </ul>
);

export default MostUsedWords;
