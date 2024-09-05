import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  TextField,
} from '@mui/material';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IData } from '../../api/types.ts';
import { columns } from '../../assets/data/columns.ts';
import { parseDateISO } from '../../utils/parseDateISO.ts';
import { ItemFormProps } from './types.ts';
import { dataWithISODates } from '../../utils/dataWithISODates.ts';

export const ItemForm: FC<ItemFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>();

  const handleFormSubmit: SubmitHandler<IData> = (data) => {
    const resData = dataWithISODates(data);

    const dataWithId = props.currentData
      ? { ...resData, id: props.currentData.id }
      : resData;

    props.onSubmit(dataWithId);
  };

  const setValue = (title: keyof IData) => {
    let value = '';

    if (props.mode === 'update') {
      value = parseDateISO(title, props.currentData[title]);
    }

    return value;
  };

  return (
    <Card component='form' onSubmit={handleSubmit(handleFormSubmit)}>
      <CardHeader title={props.formTitle} />
      <Divider />
      <CardContent>
        <Stack spacing={2}>
          {columns.map((title, idx) => (
            <TextField
              key={idx}
              label={
                title === 'employeeSigDate' || title === 'companySigDate'
                  ? title + ' DD.MM.YY'
                  : title
              }
              size='small'
              error={Boolean(errors[title as keyof IData])}
              helperText={
                Boolean(errors[title as keyof IData]) &&
                'Поле обязательно для заполнения'
              }
              {...register(title as keyof IData, {
                required: true,
                value: setValue(title as keyof IData),
              })}
            />
          ))}
        </Stack>
        <Box sx={{ mt: 4 }}>
          <Button
            size='small'
            variant='contained'
            type='submit'
            color='success'
          >
            {props.btnSubmitText}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
