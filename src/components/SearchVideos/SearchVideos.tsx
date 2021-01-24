import get from 'lodash.get';
import debounce from 'lodash.debounce';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Box, Flex } from 'rebass';
import { IconButton, TextField } from 'ui-neumorphism';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

import { ONE_SECOND } from 'constants/time/oneSecond';
import { getIdsByTerm, getDataByIds } from 'services/youtube';

import extractDuration from './helpers/extractDuration';
import { getAmountDays } from './helpers/getAmountDays';
import { TSearchVideosProps } from './types';
import getMostUsedWords from './helpers/getMostUsedWords';
import removeVideosLongerThanWeekMinute from './helpers/removeVideosLongerThanWeekMinute';

const SearchVideos = ({
  setAmountDays,
  setMostUsedWords,
  minutes,
}: TSearchVideosProps) => {
  const inputTermRef = useRef(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>();

  const onSearch = useCallback(async () => {
    if (!searchTerm) {
      return;
    }

    setIsLoading(true);
    const ids = await getIdsByTerm(searchTerm);

    if (!ids.length) {
      // SUGESTION: toast error
      return;
    }
    const videos = await getDataByIds(ids);

    const duration = extractDuration(videos);
    const allowedDuration = removeVideosLongerThanWeekMinute(duration, minutes);

    const amountDays = getAmountDays(allowedDuration, minutes);

    setAmountDays(amountDays);

    const mostUsedWords = getMostUsedWords(videos);
    setMostUsedWords(mostUsedWords);

    setIsLoading(false);
  }, [minutes, searchTerm, setAmountDays, setMostUsedWords]);

  const onClickToSearch = () => {
    const typedValue = get(inputTermRef, 'current.input.props.value');

    if (!typedValue) {
      return;
    }

    setSearchTerm(typedValue);
  };
  const debouncedOnSearch = debounce(onClickToSearch, ONE_SECOND);

  useEffect(() => {
    onSearch();
  }, [onSearch]);

  return (
    <Flex flexDirection="column">
      <Flex justifyContent="center">
        <TextField
          loading={isLoading}
          ref={inputTermRef}
          style={{ margin: 0 }}
        />

        <Box ml="2" mt="2px">
          <IconButton
            color="var(--success)"
            onClick={debouncedOnSearch}
            text={false}
          >
            <Icon path={mdiMagnify} size={1} style={{ padding: 0 }} />
          </IconButton>
        </Box>
      </Flex>
    </Flex>
  );
};

export default SearchVideos;
