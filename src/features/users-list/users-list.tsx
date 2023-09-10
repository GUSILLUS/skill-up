import { Dialog, DialogTitle, List } from '@mui/material';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

import { User } from '@/shared/types/user';

import { ManageUserForm } from '../manage-user-form';
import { UserCard } from '../user-card';

type Props = {
  users: User[];
  handleDelete: (userId: number) => Promise<void>;
  isLoading: boolean;
  handleUpdate: (updatedUser: User) => void;
};

export const UserList = ({ users, handleDelete, isLoading, handleUpdate }: Props) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleEditClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleCancelEdit = () => {
    setSelectedUser(null);
  };

  return (
    <List className="flex flex-col w-full bg-slate-100 rounded-md">
      <Fade cascade duration={600}>
        {users?.map(user => (
          <UserCard
            key={user.id}
            user={user}
            handleDelete={handleDelete}
            isLoading={isLoading}
            handleClick={handleEditClick}
          />
        ))}
      </Fade>

      <Dialog open={Boolean(selectedUser)} onClose={handleCancelEdit}>
        <DialogTitle>Edit User</DialogTitle>
        {selectedUser && (
          <ManageUserForm type="update" user={selectedUser} onCancel={handleCancelEdit} onUpdate={handleUpdate} />
        )}
      </Dialog>
    </List>
  );
};
