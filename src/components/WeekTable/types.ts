import { TextArea } from 'ui-neumorphism';
import { FormEvent, Reducer } from 'react';
import { TWeekDays } from 'types';

export type TDayOfWeek = Record<TWeekDays, number>;

export type TOptionalDayOfWeek = Partial<TDayOfWeek>;

export type TWeekTableProps = {
  setDataTable: (dayOfWeek: TOptionalDayOfWeek) => unknown;
};

export type TMinutesOnWeekUseReducer = Reducer<
  TOptionalDayOfWeek,
  TOptionalDayOfWeek
>;

export type TGetHeadersReturn = {
  align: string;
  text: string;
  value: TWeekDays;
};

export type TSetRef = (index: number) => (ref: TextArea) => TextArea;

export type TGetItemsProps = {
  headers: TGetHeadersReturn[];
  setRef: TSetRef;
  setDataTable: TWeekTableProps['setDataTable'];
};

export type TBlurDataTableEvent = {
  event: FormEvent<HTMLTextAreaElement>;
};
