import { IData } from '../../api/types.ts';

export interface BtnsDataActionsProps {
  data: IData;
  handleEditBtn: (data: IData) => void;
  handleDeleteBtn: (id: string) => void;
}
