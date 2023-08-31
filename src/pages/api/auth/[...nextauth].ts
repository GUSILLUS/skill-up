import NextAuth from 'next-auth';

import { authConfig } from '@/shared/services/configs/auth';

export default NextAuth(authConfig);
