import { Box, Button } from '@mui/material';
import { useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { IData } from '../../api/types.ts';
import { ItemForm } from '../../components/ItemForm';
import { Loader } from '../../components/Loader';
import { MessageInfo } from '../../components/MessageInfo/index.tsx';
import { Modal } from '../../components/Modal';
import { TableData } from '../../components/TableData';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { useModal } from '../../hooks/useModal.ts';
import { reqAddData, reqAllData } from '../../store/data/asyncAction.ts';

export const Data = () => {
  const dispatch = useAppDispatch();

  const { open, handleClose, handleOpen } = useModal();

  const { data, isLoading, currentData, error_text } = useAppSelector(
    (state) => state.dataSlice
  );

  const { isAuth } = useAppSelector((state) => state.authSlice);

  const submitForm: SubmitHandler<IData> = (data) => {
    handleClose();
    dispatch(reqAddData(data));
  };

  useEffect(() => {
    dispatch(reqAllData());
  }, [dispatch]);

  if (!isAuth) {
    return <Navigate to='login' />;
  }

  return (
    <>
      {isLoading && <Loader open={isLoading} />}
      {error_text && !data && <MessageInfo>{error_text}</MessageInfo>}
      {data && (
        <>
          <Box>
            <Button
              sx={{ mb: 2 }}
              color='success'
              variant='contained'
              onClick={handleOpen}
            >
              Добавить запись
            </Button>
            <TableData data={data} />
          </Box>
          {error_text && <MessageInfo>{error_text}</MessageInfo>}
          <Modal open={open} onClose={handleClose}>
            <ItemForm
              formTitle='Создание новой записи'
              btnSubmitText='Создать'
              mode='create'
              onSubmit={submitForm}
              currentData={currentData as IData}
            />
          </Modal>
        </>
      )}
    </>
  );
};
