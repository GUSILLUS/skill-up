import { withAuth } from 'next-auth/middleware';

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      if (req.nextUrl.pathname === '/') return true;
      return !!token;
    },
  },
});

export const config = { matcher: ['/formik', '/i18next', '/rtkq', '/profile'] };
