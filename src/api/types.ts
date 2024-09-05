export interface ResponseData<T = null> {
  data: T;
  error_code: number;
  error_text?: string;
}

export interface IData {
  id: string;
  documentStatus: string;
  employeeNumber: string;
  documentType: string;
  documentName: string;
  companySignatureName: string;
  employeeSignatureName: string;
  employeeSigDate: string;
  companySigDate: string;
}

export interface Token {
  token: string;
}
