import { useEffect, useRef } from 'react';
import { TextArea, Table } from 'ui-neumorphism';
import getHeaders from './providers/getHeaders';
import getItems from './providers/getItems';
import maskAllTextAreas from './providers/maskAllTextAreas';
import { TSetRef, TWeekTableProps } from './types';

const WeekTable = ({ setDataTable }: TWeekTableProps) => {
  const inputsRef = useRef<TextArea[]>([]);
  const setRef: TSetRef = (index: number) => (ref: TextArea) =>
    (inputsRef.current[index] = ref);

  const headers = getHeaders();
  const items = getItems({ headers, setRef, setDataTable });

  useEffect(() => {
    maskAllTextAreas();
  }, [items]);

  return <Table headers={headers} items={[items]} />;
};

export default WeekTable;
