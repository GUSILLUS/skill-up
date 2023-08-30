import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { User } from "../../shared/types/user/user";

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
      <IconButton onClick={() => handleDelete(id || 0)} disabled={isLoading}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  )
}