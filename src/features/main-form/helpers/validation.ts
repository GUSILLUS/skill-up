import * as yup from 'yup';

export const profileSchema = yup.object().shape({
  userName: yup.string().required('Username is required').max(20, 'Username must be at most 20 characters'),
  email: yup.string().required('Email is required').email('Invalid email address'),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
    ),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});