import { NON_WORD_NON_SPACE_REGEX } from 'constants/regex/nonWordNonSpace';
import { TMappedRepeatedWordsAccumulator, TOrderDesc } from './types';

const orderDesc: TOrderDesc = ([, currentValue], [, nextValue]) =>
  nextValue - currentValue;

const getMostUsedWords = (phrase: string) => {
  const mapperRepeatedWords = phrase
    .replace(NON_WORD_NON_SPACE_REGEX, '')
    .split(' ')
    .reduce((acc: TMappedRepeatedWordsAccumulator, cur) => {
      return {
        ...acc,
        [cur]: (acc[cur] || 0) + 1,
      };
    }, {});

  const validWords = Object.entries(mapperRepeatedWords).filter(([key]) => key);

  return validWords
    .sort(orderDesc)
    .map(([key]) => key)
    .slice(0, 5);
};

export default getMostUsedWords;
