import { IData } from '../api/types.ts';
import { convertDateToISO } from './convertDateToISO.ts';

export const dataWithISODates = (data: IData) => {
  return Object.keys(data).reduce((acc, key) => {
    acc[key as keyof IData] = convertDateToISO(key, data[key as keyof IData]);
    return acc;
  }, {} as IData);
};
