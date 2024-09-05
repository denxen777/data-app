import { IData } from '../../api/types.ts';

export interface DataTableBodyProps {
  data: IData[];
  handleEditBtn: (data: IData) => void;
  handleDeleteBtn: (id: string) => void;
}
