import weekdays from 'constants/days/weekdays';
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';
import { TGetHeadersReturn } from '../types';

const getHeaders = (): TGetHeadersReturn[] =>
  weekdays.map((weekDay) => ({
    align: 'center',
    text: capitalizeFirstLetter(weekDay as string),
    value: weekDay,
  }));

export default getHeaders;
