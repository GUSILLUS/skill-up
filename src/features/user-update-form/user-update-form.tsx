import React from 'react';
import { useUpdateUserMutation } from '@/api';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, Grid } from '@mui/material';
import { User } from '@/shared/types/user';
import { userSchema } from '@/shared/schema/userSchema';

type Props = {
  user: User;
  onCancel: () => void;
  onUpdate: (updatedUser: User) => void;
}

export const UserUpdateForm = ({ user, onCancel, onUpdate }: Props) => {
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const handleSubmit = async (values: User) => {
    try {
      const updatedUser = await updateUser({ id: user.id, updatedUser: values });
      onCancel();
      if (updatedUser.data) {
        onUpdate(updatedUser.data);
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <Formik initialValues={user} onSubmit={handleSubmit} validationSchema={userSchema}>
      <Form className="p-2">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Field name="name" as={TextField} label="Name" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Field name="username" as={TextField} label="Username" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Field name="email" as={TextField} label="Email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Field name="website" as={TextField} label="Website" fullWidth />
          </Grid>
          <Grid item xs={12} spacing={2}>
            <div className="flex gap-2">
              <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
                Update User
              </Button>
              <Button variant="outlined" onClick={onCancel}>
                Cancel
              </Button> 
            </div>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};
