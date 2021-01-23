import { TextArea } from 'ui-neumorphism';
import get from 'lodash.get';
import { TBlurDataTableEvent, TGetItemsProps } from '../types';
import { TWeekDays } from 'types';

const getItems = ({ headers, setRef, setDataTable }: TGetItemsProps) => {
  const handleSetDataTable = (weekDay: TWeekDays) => ({
    event,
  }: TBlurDataTableEvent) => {
    const typedValue = get(event, 'currentTarget.value', '0');

    const valueToNumber = Number(typedValue);

    setDataTable({
      [weekDay]: valueToNumber,
    });
  };

  return headers.reduce(
    (acc, weekDay, index) => ({
      ...acc,
      [weekDay.value]: (
        <TextArea
          autoExpand={true}
          onBlur={handleSetDataTable(weekDay.value)}
          ref={setRef(index)}
          width={80}
        />
      ),
    }),
    {},
  );
};

export default getItems;
