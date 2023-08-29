import React from "react";
import { Field, Form, useFormik, FormikProvider } from "formik";

import { profileSchema } from "./helpers/validation";
import {
  Button,
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import {
  TextField,
} from 'formik-mui';
import { ProfileForm } from "@/app/shared/types/profile";
import { CheckboxFormik } from "@/app/shared/ui/checkbox-formik";
import { SelectFormik } from "@/app/shared/ui/select-formik/select-formik";
import { RadioGroupFormik } from "@/app/shared/ui/radio-group-formik";
import { roles, genders } from "./helpers/data";
import { useRouter } from "next/navigation";

export const MainForm = () => {
  const router = useRouter()
  const formik = useFormik<ProfileForm>({
    initialValues: {
      userName: '',
      email: '',
      role: '',
      password: '',
      confirmPassword: '',
      gender: '',
      subs: false
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: profileSchema,
    onSubmit: async values => {
      // await new Promise((r) => setTimeout(r, 500));
      // alert(JSON.stringify(values, null, 2));
      router.push(`/i18next?username=${values.userName}&role=${values.role}&gender=${values.gender}&subs=${values.subs}`)
    }
  });

  return (
    <Grid item lg={12} sm={12}>
      <Container maxWidth="md">
        <FormikProvider value={formik} >
          <Form>

            <Grid container spacing={2}>

              <Grid item xs={12} >
                <Typography variant="h5">
                  Formik skill-up
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  name="userName"
                  type="text"
                  label="Username"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field
                  component={TextField}
                  name="email"
                  type="email"
                  label="Email"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field
                  fullWidth
                  component={TextField}
                  type="password"
                  label="Password"
                  name="password"
                />
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
                <RadioGroupFormik
                  name="gender"
                  label="Choose your gender:"
                  options={genders}
                />
              </Grid>

              <Grid item xs={12}>
                <SelectFormik
                  name="role"
                  label="Roles"
                  options={roles}
                />
              </Grid>

              <Grid item xs={12}>
                <CheckboxFormik
                  name="subs"
                  legend="Do want to subscribe to our news?"
                  label="Yep"
                />
              </Grid>

              <Grid item xs='auto'>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth={true}
                  color="primary"
                >
                  Submit Form
                </Button>
              </Grid>
            </Grid>
          </Form>
        </FormikProvider>
      </Container>
    </Grid>
  )
};
