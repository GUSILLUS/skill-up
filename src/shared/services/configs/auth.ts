import type { AuthOptions } from 'next-auth';
import Credential from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import { clientPromise } from '@/shared/utils';

export const authConfig: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    Credential({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', required: true },
        password: { label: 'Password', type: 'password', required: true },
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const usersCollection = client.db(process.env.DB_NAME).collection('users');
        const email = credentials?.email.toLowerCase();
        const user = await usersCollection.findOne({ email });

        if (!user) {
          throw new Error('User does not exist.');
        }

        console.log(user);

        //validate password
        const passwordIsValid = credentials?.password === user.password;

        if (!passwordIsValid) {
          throw new Error('Invalid credentials');
        }

        return {
          id: user._id.toString(),
          ...user,
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token }) {
      return token;
    },
  },
};
