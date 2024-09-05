import { SubmitHandler } from 'react-hook-form';
import { IData } from '../../api/types.ts';

export interface ItemFormProps {
  onSubmit: SubmitHandler<IData>;
  currentData: IData;
  formTitle: string;
  btnSubmitText: string;
  mode: 'create' | 'update';
}
