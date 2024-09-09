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
import { dataWithISODates } from '../../utils/dataWithISODates.ts';
import { parseDateISO } from '../../utils/parseDateISO.ts';
import { ItemFormProps } from './types.ts';

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

  const setValue = (field: keyof IData) => {
    let value = '';

    if (props.mode === 'update') {
      value = parseDateISO(field, props.currentData[field]);
    }

    return value;
  };

  return (
    <Card component='form' onSubmit={handleSubmit(handleFormSubmit)}>
      <CardHeader title={props.formTitle} />
      <Divider />
      <CardContent>
        <Stack spacing={2}>
          <TextField
            size='small'
            label='documentStatus'
            {...register('documentStatus', {
              required: true,
              value: setValue('documentStatus' as keyof IData),
            })}
          />
          <TextField
            size='small'
            label='employeeNumber'
            {...register('employeeNumber', {
              required: true,
              value: setValue('employeeNumber' as keyof IData),
            })}
          />
          <TextField
            size='small'
            label='documentType'
            {...register('documentType', {
              required: true,
              value: setValue('documentType' as keyof IData),
            })}
          />
          <TextField
            size='small'
            label='documentName'
            {...register('documentName', {
              required: true,
              value: setValue('documentName' as keyof IData),
            })}
          />
          <TextField
            size='small'
            label='companySignatureName'
            {...register('companySignatureName', {
              required: true,
              value: setValue('companySignatureName' as keyof IData),
            })}
          />
          <TextField
            size='small'
            label='employeeSignatureName'
            {...register('employeeSignatureName', {
              required: true,
              value: setValue('employeeSignatureName' as keyof IData),
            })}
          />
          <TextField
            size='small'
            label='employeeSigDate'
            type='date'
            slotProps={{ inputLabel: { shrink: true } }}
            helperText={errors.employeeSigDate?.message}
            error={Boolean(errors.employeeSigDate?.message)}
            {...register('employeeSigDate', {
              required: true,
              value: setValue('employeeSigDate' as keyof IData),
              validate: (val) =>
                val.split('-')[0].length > 4 ? 'Некорректная дата' : undefined,
            })}
          />
          <TextField
            size='small'
            label='companySigDate'
            type='date'
            slotProps={{ inputLabel: { shrink: true } }}
            helperText={errors.companySigDate?.message}
            error={Boolean(errors.companySigDate?.message)}
            {...register('companySigDate', {
              required: true,
              value: setValue('companySigDate' as keyof IData),
              validate: (val) =>
                val.split('-')[0].length > 4 ? 'Некорректная дата' : undefined,
            })}
          />
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
