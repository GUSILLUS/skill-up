// pages/index.js
import React, { useState } from 'react';
import { UserCard } from '../user-card';
import { User } from '@/shared/types/user';
import { Dialog, DialogTitle, List } from '@material-ui/core';
import { UserUpdateForm } from '../user-update-form';

type Props = {
  users: User[],
  handleDelete: (userId: number) => Promise<void>;
  isLoading: boolean;
  handleUpdate: (updatedUser: User) => void;
}

export const UserList = ({ users, handleDelete, isLoading, handleUpdate }: Props) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleEditClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleCancelEdit = () => {
    setSelectedUser(null);
  };


  return (
    <div className='flex flex-col items-center bg-slate-100 w-full'>
      <List className='flex flex-wrap justify-center'>
        {users?.map((user) => (
          <UserCard key={user.id} user={user} handleDelete={handleDelete} isLoading={isLoading} handleClick={handleEditClick} />
        ))}

      <Dialog open={Boolean(selectedUser)} onClose={handleCancelEdit} className="p-3">
        <DialogTitle>Edit User</DialogTitle>
        {selectedUser && <UserUpdateForm user={selectedUser} onCancel={handleCancelEdit} onUpdate={handleUpdate} />}
      </Dialog>
      </List>
    </div>
  )
};
