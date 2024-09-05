import { FC } from 'react';
import { BtnsDataActionsProps } from './types.ts';
import { ButtonGroup, IconButton, Tooltip } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

export const BtnsDataActions: FC<BtnsDataActionsProps> = (props) => {
  return (
    <ButtonGroup>
      <Tooltip title='Редактировать'>
        <IconButton
          color='secondary'
          onClick={() => props.handleEditBtn(props.data)}
        >
          <EditNoteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title='Удалить'>
        <IconButton
          color='warning'
          onClick={() => props.handleDeleteBtn(props.data.id)}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </ButtonGroup>
  );
};
