import { Button, Typography } from '@mui/material';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import { TextField } from 'formik-mui';

import { userSchema } from '@/shared/schema/user-schema';
import { useAddUserMutation } from '@/shared/services/api';
import { User } from '@/shared/types/user';

type Props = {
  handleAdd: (newUser: User) => void;
};
export const FormikAddUserForm = ({ handleAdd }: Props) => {
  const [addUser, { isLoading }] = useAddUserMutation();

  const formik = useFormik<User>({
    initialValues: {
      name: '',
      email: '',
      username: '',
      website: '',
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: userSchema,
    onSubmit: async values => {
      const newUser = {
        name: values.name,
        email: values.email,
        username: values.username,
        website: values.website,
      };
      const user = await addUser(newUser);
      console.log(user);

      if ('data' in user) {
        handleAdd(user.data);
      }
      formik.resetForm();
    },
  });

  return (
    <div>
      <Typography component="h2" variant="h5" className="text-center">
        Add User
      </Typography>
      <FormikProvider value={formik}>
        <Form className="flex flex-col gap-2">
          <Field component={TextField} name="name" type="text" label="Name" fullWidth />
          <Field component={TextField} name="email" type="text" label="Email" fullWidth />
          <Field component={TextField} name="username" type="text" label="Username" fullWidth />
          <Field component={TextField} name="website" type="text" label="Website" fullWidth />
          <Button type="submit" disabled={isLoading} variant="contained" fullWidth={true} color="primary">
            Add User
          </Button>
        </Form>
      </FormikProvider>
    </div>
  );
};
