import weekdays from 'constants/time/weekdays';
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';
import { TGetHeadersReturn } from '../types';

const getHeaders = (): TGetHeadersReturn[] =>
  weekdays.map((weekDay) => ({
    align: 'justify',
    text: capitalizeFirstLetter(weekDay as string),
    value: weekDay,
  }));

export default getHeaders;
