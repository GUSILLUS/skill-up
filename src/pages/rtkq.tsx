'use client';
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';

import { ManageUserForm } from '@/features/manage-user-form';
import { useDeleteUserMutation, useFetchUsersQuery } from '@/shared/services/api';
import { User } from '@/shared/types/user';
import { Layout } from '@/shared/ui/layout';

import { UserList } from '../features/users-list';

export default function Page() {
  const { data: users, isLoading } = useFetchUsersQuery();
  const [showedUsers, setShowedUsers] = useState<User[]>([]);
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

  useEffect(() => {
    setShowedUsers(users || []);
  }, [users]);

  const handleAdd = (newUser: User) => {
    setShowedUsers(prevState => [...prevState, newUser]);
  };

  const handleUpdate = (updatedUser: User) => {
    setShowedUsers(prevState =>
      prevState.map(user => {
        if (user.id === updatedUser.id) {
          return updatedUser;
        }

        return user;
      }),
    );
  };

  const handleDelete = async (userId: number) => {
    await deleteUser(userId);
    setShowedUsers(prevState => prevState.filter(user => user.id !== userId));
  };

  return (
    <Layout>
      {isLoading ? (
        <CircularProgress size={80} />
      ) : (
        <div className="flex gap-2">
          <UserList
            users={showedUsers}
            handleDelete={handleDelete}
            isLoading={isDeleting}
            handleUpdate={handleUpdate}
          />
          <ManageUserForm type="add" handleAdd={handleAdd} />
        </div>
      )}
    </Layout>
  );
}
