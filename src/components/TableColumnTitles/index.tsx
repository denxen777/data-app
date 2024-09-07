import { TableCell, TableRow } from '@mui/material';
import { fields } from '../../constants/fields';

export const TableColumnTitles = () => {
  return (
    <TableRow>
      <TableCell align='right'>Actions</TableCell>
      {fields.map((title, idx) => (
        <TableCell key={idx} align='right'>
          {title}
        </TableCell>
      ))}
    </TableRow>
  );
};
