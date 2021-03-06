import { TMinutesOnWeekUseReducer } from 'components/WeekTable/types';
import weekdays from 'constants/time/weekdays';
import { useMemo, useReducer, useState } from 'react';
import { Box, Flex, Text } from 'rebass';

import WeekTable from '../WeekTable';
import SearchVideos from '../SearchVideos';
import MostUsedWords from 'components/MostUsedWords';
import { TVideoData } from 'types';
import Videos from 'components/Videos';

const Content = () => {
  const [amountDays, setAmountDays] = useState<number>();
  const [videos, setVideos] = useState<TVideoData[]>([]);
  const [mostUsedWords, setMostUsedWords] = useState<string[]>([]);

  const [
    minutesOnWeek,
    setMinutesOnWeek,
  ] = useReducer<TMinutesOnWeekUseReducer>((oldState, newState) => {
    setAmountDays(undefined);
    setMostUsedWords([]);

    return {
      ...oldState,
      ...newState,
    };
  }, {});

  const hasNOEmptyFields = useMemo(
    () => weekdays.every((weekday) => minutesOnWeek[weekday] !== undefined),
    [minutesOnWeek],
  );

  const minutes = useMemo(
    () =>
      Object.values(minutesOnWeek).filter((minute) =>
        Number.isInteger(minute),
      ) as number[],
    [minutesOnWeek],
  );

  const hasMostUsedWords = !!mostUsedWords.length;
  const hasVideos = !!videos.length;
  const amountDaysWasModified = amountDays !== undefined;

  return (
    <Flex flexDirection="column">
      <Text as="h1" variant="mainHeader" mb="4">
        Youtube schedule calculator
      </Text>

      <Text mb="3" variant="subTitle">
        Complete the weekdays with your available time (in minutes)
      </Text>

      <Box>
        <WeekTable setDataTable={setMinutesOnWeek} />
      </Box>

      {hasNOEmptyFields && (
        <Box mt="5">
          <Text mb="3" variant="subTitle">
            What video term do you want to search?
          </Text>

          <SearchVideos
            setAmountDays={setAmountDays}
            setMostUsedWords={setMostUsedWords}
            setVideos={setVideos}
            minutes={minutes}
          />
        </Box>
      )}

      {amountDaysWasModified && (
        <Box>
          <Text textAlign="center">
            You will spend {amountDays ?? 1} days to watch
          </Text>
        </Box>
      )}

      {hasMostUsedWords && (
        <Box mt="5">
          <Text fontWeight="bold" textAlign="left">
            Top 5 words of results:
          </Text>
          <Box mt="3" pl="3">
            <MostUsedWords words={mostUsedWords} />
          </Box>
        </Box>
      )}

      {hasVideos && (
        <Box mt="4">
          <Videos videos={videos} />
        </Box>
      )}
    </Flex>
  );
};

export default Content;
