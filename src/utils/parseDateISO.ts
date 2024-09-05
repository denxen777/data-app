export const parseDateISO = (key: string, val: string) => {
  if (key === 'employeeSigDate' || key === 'companySigDate') {
    return new Date(Date.parse(val)).toLocaleDateString();
  }
  return val;
};
