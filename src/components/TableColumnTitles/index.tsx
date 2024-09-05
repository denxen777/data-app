import { TableCell, TableRow } from '@mui/material';
import { columns } from '../../assets/data/columns.ts';

export const TableColumnTitles = () => {
  return (
    <TableRow>
      <TableCell align='right'>Actions</TableCell>
      {columns.map((title, idx) => (
        <TableCell key={idx} align='right'>
          {title}
        </TableCell>
      ))}
    </TableRow>
  );
};
