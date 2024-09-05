import { api } from './api';
import { IData, ResponseData } from './types';

export const getAllData = async () => {
  return await api.get<ResponseData<IData[]>>(
    '/ru/data/v3/testmethods/docs/userdocs/get',
  );
};

export const addData = async (data: IData) => {
  return await api.post<ResponseData<IData>>(
    '/ru/data/v3/testmethods/docs/userdocs/create',
    data,
  );
};

export const updateData = async (data: IData) => {
  return await api.post<ResponseData<IData>>(
    `/ru/data/v3/testmethods/docs/userdocs/set/${data.id}`,
    data,
  );
};

export const removeData = async (id: string) => {
  return await api.post<ResponseData>(
    `/ru/data/v3/testmethods/docs/userdocs/delete/${id}`,
  );
};
