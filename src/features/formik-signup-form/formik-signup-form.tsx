import { Button, CircularProgress } from '@mui/material';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import { TextField } from 'formik-mui';
import { signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';

import { signupSchema } from '@/shared/schema/signup-schema';
import { SignupUser } from '@/shared/types/signup-user';
import { FormikFileUploader } from '@/shared/ui/formik-file-uploader';

export function FormikSignupForm() {
  const formik = useFormik<SignupUser>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      file: null as File | null,
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: signupSchema,
    onSubmit: async values => {
      try {
        const server = await fetch('/api/signup/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...values, file: imageUrl }),
        });

        if (server.status === 200) {
          signIn('credentials', {
            email: values.email.toLowerCase(),
            password: values.password,
            redirect: false,
          });
        } else {
          formik.setFieldError('email', 'Email is already exist');
        }
      } catch (error) {
        console.error('Signup failed:', error);
      }
    },
  });

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const loadImage = () => {
    if (formik.values.file) {
      const reader = new FileReader();
      reader.onload = e => {
        if (e.target && typeof e.target.result === 'string') {
          setImageUrl(e.target.result);
        }
      };
      reader.readAsDataURL(formik.values.file);
    }
  };

  // Call loadImage when the file prop changes
  useEffect(() => {
    loadImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.file]);

  return (
    <Fade duration={1400}>
      <FormikProvider value={formik}>
        <Form className="flex flex-col gap-2">
          <Field component={TextField} name="name" type="text" label="Name" fullWidth />
          <Field component={TextField} name="email" type="text" label="Email" fullWidth />
          <Field component={TextField} name="password" type="password" label="Password" fullWidth className="mb-4" />
          <FormikFileUploader name="file" url={imageUrl || ''} errors={formik.errors.file} />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={formik.isSubmitting || !!formik.errors.file}
            startIcon={formik.isSubmitting ? <CircularProgress size={20} /> : null}
          >
            Sign Up
          </Button>
        </Form>
      </FormikProvider>
    </Fade>
  );
}
