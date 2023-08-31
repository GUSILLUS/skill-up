import { Container, Paper, TextField, Button, CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import { signIn } from 'next-auth/react';

import { signupSchema } from '@/shared/schema/signup-schema';
import { SignupUser } from '@/shared/types/signup-user';

export function FormikSignupForm() {
  const formik = useFormik<SignupUser>({
    initialValues: {
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

        signIn(
          'Credentials',
          { callbackUrl: '/profile', redirect: false },
          {
            email: values.email,
            password: values.password,
          },
        );
      } catch (error) {
        console.error('Signup failed:', error);
      }
    },
  });

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
        <form onSubmit={formik.handleSubmit}>
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
        </form>
      </Paper>
    </Container>
  );
}
