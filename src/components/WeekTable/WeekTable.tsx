import { useEffect, useRef } from 'react';
import { TextField, Table } from 'ui-neumorphism';
import getHeaders from './providers/getHeaders';
import getItems from './providers/getItems';
import maskAllInputs from './providers/maskAllInputs';
import { TSetRef, TWeekTableProps } from './types';

const WeekTable = ({ setDataTable }: TWeekTableProps) => {
  const inputsRef = useRef<TextField[]>([]);
  const setRef: TSetRef = (index: number) => (ref: TextField) =>
    (inputsRef.current[index] = ref);

  const headers = getHeaders();
  const items = getItems({ headers, setRef, setDataTable });

  useEffect(() => {
    maskAllInputs();
  }, [items]);

  return <Table headers={headers} items={[items]} />;
};

export default WeekTable;
