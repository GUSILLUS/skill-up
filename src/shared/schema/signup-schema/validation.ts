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
  file: yup
    .mixed()
    .required('Image is required')
    .test(
      'fileSize',
      'File size is too large',
      value => !value || (value as File).size <= 5242880, // 5MB limit
    )
    .test(
      'fileType',
      'Unsupported file type',
      value => !value || ['image/jpeg', 'image/png'].includes((value as File).type),
    ),
});
