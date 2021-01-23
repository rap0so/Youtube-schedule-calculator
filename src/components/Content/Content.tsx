import { TMinutesOnWeekUseReducer } from 'components/WeekTable/types';
import weekdays from 'constants/days/weekdays';
import { useMemo, useReducer } from 'react';
import { Box, Text } from 'rebass';

import WeekTable from '../WeekTable';

const Content = () => {
  // TODO: type it properly
  const [
    minutesOnWeek,
    setMinutesOnWeek,
  ] = useReducer<TMinutesOnWeekUseReducer>(
    (oldState, newState) => ({
      ...oldState,
      ...newState,
    }),
    {},
  );

  const showSearch = useMemo(
    () => weekdays.every((weekday) => minutesOnWeek[weekday]),
    [minutesOnWeek],
  );

  return (
    <>
      <Text as="h1" variant="mainHeader" mb="4">
        Youtube schedule calculator
      </Text>

      <Text mb="3" textAlign="left" variant="subTitle">
        Complete the weekdays with your available time (in minutes)
      </Text>

      <Box>
        <WeekTable setDataTable={setMinutesOnWeek} />
      </Box>

      {showSearch && <Box>asd</Box>}
    </>
  );
};

export default Content;
