import * as yup from 'yup';

const re = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm


export const userSchema = yup.object().shape({
  name: yup.string().required('Name is required').min(4, 'Name must contain at least 4 characters'),
  username: yup.string().required('Username is required').max(20, 'Username must be at most 20 characters'),
  email: yup.string().required('Email is required').email('Invalid email address'),
  website: yup.string().matches(re,'URL is not valid'),
});