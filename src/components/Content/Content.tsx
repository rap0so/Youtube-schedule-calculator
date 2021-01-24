import { TMinutesOnWeekUseReducer } from 'components/WeekTable/types';
import weekdays from 'constants/time/weekdays';
import { useMemo, useReducer, useState } from 'react';
import { Box, Flex, Text } from 'rebass';

import WeekTable from '../WeekTable';
import SearchVideos from '../SearchVideos';

const Content = () => {
  const [amountDays, setAmountDays] = useState<number>();
  const [mostUsedWords, setMostUsedWords] = useState<string[]>();

  const [
    minutesOnWeek,
    setMinutesOnWeek,
  ] = useReducer<TMinutesOnWeekUseReducer>((oldState, newState) => {
    setAmountDays(undefined);
    setMostUsedWords(undefined);

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

  const hasMostUsedWords = mostUsedWords?.length;

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
            minutes={minutes}
          />
        </Box>
      )}

      {amountDays && (
        <Box>
          <Text textAlign="center">
            You will spend {amountDays} days to watch
          </Text>
        </Box>
      )}

      {hasMostUsedWords && (
        <Box>{/* <MostUsedWords words={mostUsedWords} /> */}</Box>
      )}
    </Flex>
  );
};

export default Content;
