import * as yup from 'yup';

export const signupSchema = yup.object().shape({
  name: yup.string().required('Name is required').min(4, 'Name must contain at least 4 characters'),
  email: yup.string().required('Email is required').email('Invalid email address'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
    ),
});
