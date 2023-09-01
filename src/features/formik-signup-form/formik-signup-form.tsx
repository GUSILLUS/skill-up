import { Button, CircularProgress } from '@mui/material';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import { TextField } from 'formik-mui';
import { signIn } from 'next-auth/react';

import { signupSchema } from '@/shared/schema/signup-schema';
import { SignupUser } from '@/shared/types/signup-user';

export function FormikSignupForm() {
  const formik = useFormik<SignupUser>({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: signupSchema,
    onSubmit: async values => {
      try {
        await fetch('/api/signup/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        signIn('credentials', {
          email: values.email.toLowerCase(),
          password: values.password,
          redirect: false,
        });
      } catch (error) {
        console.error('Signup failed:', error);
      }
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form className="flex flex-col gap-2">
        <Field component={TextField} name="name" type="text" label="Name" fullWidth />
        <Field component={TextField} name="email" type="text" label="Email" fullWidth />
        <Field component={TextField} name="password" type="password" label="Password" fullWidth />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={formik.isSubmitting}
          startIcon={formik.isSubmitting ? <CircularProgress size={20} /> : null}
        >
          Sign Up
        </Button>
      </Form>
    </FormikProvider>
  );
}
