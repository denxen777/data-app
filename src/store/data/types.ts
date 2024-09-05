import { IData } from '../../api/types.ts';

export interface DataState {
  data: IData[] | null;
  currentData: IData | null;
  isLoading: boolean;
  error_text: string | null;
}
