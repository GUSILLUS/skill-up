import { TextField, Button, CircularProgress } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
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
    onReset(values, formikHelpers) {
      formikHelpers.resetForm();
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form className="flex flex-col gap-2">
        <TextField
          id="email"
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
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
