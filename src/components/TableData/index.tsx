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
import { useModal } from '../../hooks/useModal.ts';
import { reqRemoveData, reqUpdateData } from '../../store/data/asyncAction.ts';
import { addCurrentData } from '../../store/data/dataSlice.ts';
import { ItemForm } from '../ItemForm';
import { Modal } from '../Modal';
import { TableDataProps } from './types.ts';
import { TableColumnTitles } from '../TableColumnTitles';
import { DataTableBody } from '../DataTableBody';
import { useAppSelector } from '../../hooks/useAppSelector.ts';

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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
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
