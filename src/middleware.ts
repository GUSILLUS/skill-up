import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: params => {
      const { token } = params;
      return !!token;
    },
  },
});

export const config = { matcher: ['/formik', '/i18next', '/rtkq', '/profile'] };
