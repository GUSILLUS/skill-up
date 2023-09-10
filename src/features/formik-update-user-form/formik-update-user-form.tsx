import { Button, Grid } from '@mui/material';
import { Form, Field, useFormik, FormikProvider } from 'formik';
import { TextField } from 'formik-mui';

import { userSchema } from '@/shared/schema/user-schema';
import { useUpdateUserMutation } from '@/shared/services/api';
import { User } from '@/shared/types/user';

type Props = {
  user: User;
  onCancel: () => void;
  onUpdate: (updatedUser: User) => void;
};

export const FormikUpdateUserForm = ({ user, onCancel, onUpdate }: Props) => {
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const formik = useFormik<User>({
    initialValues: user,
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: userSchema,
    onSubmit: async values => {
      try {
        const updatedUser = await updateUser({ id: user.id || 0, updatedUser: values });
        onCancel();
        if ('data' in updatedUser) {
          onUpdate(updatedUser.data);
        }
      } catch (error) {
        console.error('Error updating user:', error);
      }
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form className="p-2">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Field name="name" component={TextField} label="Name" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Field name="username" component={TextField} label="Username" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Field name="email" component={TextField} label="Email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Field name="website" component={TextField} label="Website" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <div className="flex gap-2">
              <Button type="submit" variant="contained" color="primary" size="small" disabled={isLoading}>
                Update User
              </Button>
              <Button variant="outlined" size="small" onClick={onCancel}>
                Cancel
              </Button>
            </div>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
};
