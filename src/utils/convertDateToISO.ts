export const convertDateToISO = (key: string, val: string) => {
  if (key === 'employeeSigDate' || key === 'companySigDate') {
    return new Date(val).toISOString();
  }
  return val;
};
