export const convertDateToISO = (key: string, val: string) => {
  if (key === 'employeeSigDate' || key === 'companySigDate') {
    const reversDate = val.split('.').reverse().join('.');
    return new Date(reversDate).toISOString();
  }
  return val;
};
