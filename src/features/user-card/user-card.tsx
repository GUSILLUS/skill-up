import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, Tooltip } from '@mui/material';
import React from 'react';

import { User } from '../../shared/types/user/user';

type Props = {
  user: User;
  handleDelete: (userId: number) => Promise<void>;
  isLoading: boolean;
  handleClick: (user: User) => void;
};

export const UserCard = ({ user, handleDelete, isLoading, handleClick }: Props) => {
  const { id, name, username, email, website } = user;

  return (
    <ListItem alignItems="center" divider>
      <ListItemAvatar>
        <Avatar>{username?.charAt(0) || '?'}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={`${username} • ${email} • ${website}`}
        sx={{ flex: '1 1 auto' }} // Allow item to take available space
      />
      <div className="w-min">
        <Tooltip title="Edit">
          <IconButton onClick={() => handleClick(user)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton onClick={() => handleDelete(id || 0)} disabled={isLoading}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    </ListItem>
  );
};
