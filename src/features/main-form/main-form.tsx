import { Button, Container, Grid, Typography } from '@mui/material';
import { Field, Form, useFormik, FormikProvider } from 'formik';
import { TextField } from 'formik-mui';
import { useRouter } from 'next/navigation';

import { Profile } from '@/shared/types/profile';
import { FormikCheckbox } from '@/shared/ui/formik-checkbox';
import { FormikRadioGroup } from '@/shared/ui/formik-radio-group';
import { FormikSelect } from '@/shared/ui/formik-select/formik-select';

import { roles, genders } from './helpers/data';
import { profileSchema } from './helpers/validation';

export const MainForm = () => {
  const router = useRouter();
  const formik = useFormik<Profile>({
    initialValues: {
      userName: '',
      email: '',
      role: '',
      password: '',
      confirmPassword: '',
      gender: '',
      subs: false,
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: profileSchema,
    onSubmit: async values => {
      router.push(
        `/i18next?username=${values.userName}&role=${values.role}&gender=${values.gender}&subs=${values.subs}`,
      );
    },
  });

  return (
    <Grid item lg={12} sm={12}>
      <Container maxWidth="md">
        <FormikProvider value={formik}>
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5">Formik skill-up</Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field component={TextField} name="userName" type="text" label="Username" fullWidth />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field component={TextField} name="email" type="email" label="Email" fullWidth />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field fullWidth component={TextField} type="password" label="Password" name="password" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  type="password"
                  label="Confirm password"
                  name="confirmPassword"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <FormikRadioGroup name="gender" label="Choose your gender:" options={genders} />
              </Grid>

              <Grid item xs={12}>
                <FormikSelect name="role" label="Roles" options={roles} />
              </Grid>

              <Grid item xs={12}>
                <FormikCheckbox name="subs" legend="Do want to subscribe to our news?" label="Yep" />
              </Grid>

              <Grid item xs="auto">
                <Button type="submit" variant="contained" fullWidth={true} color="primary">
                  Submit Form
                </Button>
              </Grid>
            </Grid>
          </Form>
        </FormikProvider>
      </Container>
    </Grid>
  );
};
