import { FC } from 'react';
import { DataTableBodyProps } from './types.ts';
import { TableCell, TableRow } from '@mui/material';
import { parseDateISO } from '../../utils/parseDateISO.ts';
import { BtnsDataActions } from '../BtnsDataActions';

export const DataTableBody: FC<DataTableBodyProps> = (props) => {
  return (
    <>
      {props.data.map(({ id, ...data }, idx) => {
        return (
          <TableRow
            key={idx}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell>
              <BtnsDataActions
                data={{ id, ...data }}
                handleEditBtn={props.handleEditBtn}
                handleDeleteBtn={props.handleDeleteBtn}
              />
            </TableCell>
            {Object.entries(data).map(([key, val], idx) => (
              <TableCell key={idx} align='right'>
                {parseDateISO(key, val)}
              </TableCell>
            ))}
          </TableRow>
        );
      })}
    </>
  );
};
