import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from '@mui/material';
import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { IData } from '../../api/types.ts';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { useModal } from '../../hooks/useModal.ts';
import { reqRemoveData, reqUpdateData } from '../../store/data/asyncAction.ts';
import { addCurrentData } from '../../store/data/dataSlice.ts';
import { DataTableBody } from '../DataTableBody';
import { ItemForm } from '../ItemForm';
import { MessageInfo } from '../MessageInfo/index.tsx';
import { Modal } from '../Modal';
import { TableColumnTitles } from '../TableColumnTitles';
import { TableDataProps } from './types.ts';

export const TableData: FC<TableDataProps> = (props) => {
  const dispatch = useAppDispatch();

  const { currentData } = useAppSelector((state) => state.dataSlice);

  const { open, handleClose, handleOpen } = useModal();

  const handleEditBtn = (data: IData) => {
    dispatch(addCurrentData(data));
    handleOpen();
  };

  const handleDeleteBtn = (id: string) => {
    dispatch(reqRemoveData(id));
  };

  const submitForm: SubmitHandler<IData> = (data) => {
    handleClose();
    dispatch(reqUpdateData(data));
  };

  return (
    <>
      {!props.data.length && (
        <MessageInfo>Данные отсутствуют, добавьте запись!</MessageInfo>
      )}
      {!!props.data.length && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableColumnTitles />
            </TableHead>
            <TableBody>
              <DataTableBody
                data={props.data}
                handleEditBtn={handleEditBtn}
                handleDeleteBtn={handleDeleteBtn}
              />
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {currentData && (
        <Modal open={open} onClose={handleClose}>
          <ItemForm
            currentData={currentData}
            formTitle='Обновить данные'
            btnSubmitText='Обновить'
            onSubmit={submitForm}
            mode='update'
          />
        </Modal>
      )}
    </>
  );
};
