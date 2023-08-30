import React from "react";
import { User } from "@/shared/types/user"
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

type Props = {
  user: User;
  handleDelete: (userId: number) => Promise<void>;
  isLoading: boolean;
  handleClick: (user: User) => void;
}

export const UserCard = ({ user, handleDelete, isLoading, handleClick }: Props) => {
  const {
    id,
    name,
    username,
    email,
    website,
  } = user;

  return (
    <ListItem alignItems="center" divider > 
      <ListItemAvatar className="w-1/12" >
        <Avatar >{username?.charAt(0) || '?'}</Avatar>
      </ListItemAvatar>
      <ListItemText
        className="w-1/5"
        primary={name}
        secondary={email}
      />
      <ListItemText
        className="w-1/5"
        primary={username}
        secondary={website}
      />
      <IconButton onClick={() => handleClick(user)}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => handleDelete(id)} disabled={isLoading}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  )
}