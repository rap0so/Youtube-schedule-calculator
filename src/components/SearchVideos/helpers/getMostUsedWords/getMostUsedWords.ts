import { NON_WORD_NON_SPACE_REGEX } from 'constants/regex/nonWordNonSpace';
import { TVideoData } from 'types';

import commonConjunctions from './commonConjunctions';
import { TMappedRepeatedWordsAccumulator, TOrderDesc } from './types';

const orderDesc: TOrderDesc = ([, currentValue], [, nextValue]) =>
  nextValue - currentValue;

const getMostUsedWords = (videos: TVideoData[], quantity = 5) => {
  const mapperRepeatedWords = videos
    .reduce((text, video) => `${text} ${video.title} ${video.duration}`, '')
    .toLowerCase()
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
    .filter((word) => !commonConjunctions.includes(word))
    .filter((word) => word.length > 1)
    .slice(0, quantity);
};

export default getMostUsedWords;
