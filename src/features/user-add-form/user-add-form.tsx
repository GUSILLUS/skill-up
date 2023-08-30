import React from 'react';
import { useAddUserMutation } from '@/api';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import { User } from '@/shared/types/user';
import { Button, Typography } from '@material-ui/core';
import { TextField } from 'formik-mui';
import { userSchema } from '@/shared/schema/userSchema';

type Props = {
  handleAdd: (newUser: User) => void;
}
export const UserAddForm = ({handleAdd}: Props) => {
  const [addUser, { isLoading }] = useAddUserMutation();

  const formik = useFormik<User>({
    initialValues: {
      name: '',
      email: '',
      id: 1,
      username: '',
      website: '',
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: userSchema,
    onSubmit: async (values) => {
      const newUser = {
        name: values.name,
        email: values.email,
        username: values.username,
        website: values.website,
      };
      const user = await addUser(newUser);
      console.log(user);

      if(user.data) {
       handleAdd(user.data)
      }
      formik.resetForm();
    },
  });

  return (
    <div className="w-3/12">
      <Typography component="h2" variant="h5" className="text-center" >Add User</Typography>
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
          <Field
            component={TextField}
            name="name"
            type="text"
            label="Name"
            fullWidth
          />
          <Field
            component={TextField}
            name="email"
            type="text"
            label="Email"
            fullWidth
          />
          <Field
            component={TextField}
            name="username"
            type="text"
            label="Username"
            fullWidth
          />
          <Field
            component={TextField}
            name="website"
            type="text"
            label="Website"
            fullWidth
          />
          <Button 
            type="submit" 
            disabled={isLoading} 
            variant="contained"
            fullWidth={true}
            color="primary"
          >
            Add User
          </Button>
      </Form>
      </FormikProvider>
      
    </div>
  );
};
