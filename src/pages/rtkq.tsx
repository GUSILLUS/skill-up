'use client'
import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserList } from "../features/users-list";
import { User } from "@/shared/types/user";
import { useDeleteUserMutation, useFetchUsersQuery } from '@/shared/services/api'
import { ManageUserForm } from "@/features/manage-user-form";

export default function Page() {
  const { data: users, isLoading } = useFetchUsersQuery();
  const [showedUsers, setShowedUsers] = useState<User[]>([])
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

  useEffect(() => {
    setShowedUsers(users || [])
  }, [users])

  const handleAdd = (newUser: User) => {
    setShowedUsers(prevState => [...prevState, newUser])
  }
  
  const handleUpdate = (updatedUser: User) => {
    setShowedUsers(prevState => prevState.map(user => {
      if(user.id === updatedUser.id) {
        return updatedUser;
      }

      return user;
    }))
  }

  const handleDelete = async (userId: number) => {
    await deleteUser(userId);
    setShowedUsers(prevState => prevState.filter(user => user.id !== userId))
  };

  const router = useRouter()

  const onClickFormik = () => {
    router.push('/')
  }

  const onClick18 = () => {
    router.push('/i18next')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-12 lg:p-24">
      {isLoading ? <CircularProgress size={80} /> : (
        <>
          <div className="flex gap-2">
            <UserList users={showedUsers} handleDelete={handleDelete} isLoading={isDeleting} handleUpdate={handleUpdate}/>
            <ManageUserForm type='add' handleAdd={handleAdd} />
          </div>
          

          <div className='flex gap-2'>
            <Button 
              fullWidth={false}
              size="large"
              onClick={onClickFormik}
              variant="contained"
              color="primary"
            >
              Go to Formik
            </Button>

            <Button 
              fullWidth={false}
              size="large"
              onClick={onClick18}
              variant="contained"
              color="primary"
            >
              Go to i18next
            </Button>
          </div>
          
        </>
      )}
    </main>
  )
}