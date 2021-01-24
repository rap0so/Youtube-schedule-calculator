import { TextField } from 'ui-neumorphism';
import get from 'lodash.get';
import { TGetItemsProps } from '../types';
import { TBlurInputEvent, TWeekDays } from 'types';

const getItems = ({ headers, setRef, setDataTable }: TGetItemsProps) => {
  const handleSetDataTable = (weekDay: TWeekDays) => ({
    event,
  }: TBlurInputEvent) => {
    const typedValue = get(event, 'currentTarget.value');

    if (!typedValue) {
      return;
    }

    const valueToNumber = Number(typedValue);

    setDataTable({
      [weekDay]: valueToNumber,
    });
  };

  return headers.reduce(
    (acc, weekDay, index) => ({
      ...acc,
      [weekDay.value]: (
        <TextField
          style={{ margin: 0 }}
          className="bind-mask"
          onBlur={handleSetDataTable(weekDay.value)}
          ref={setRef(index)}
          width={80}
        />
      ),
      align: 'right',
    }),
    {},
  );
};

export default getItems;
