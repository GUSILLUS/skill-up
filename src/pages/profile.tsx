'use client';
import { CircularProgress, Typography, Paper, Avatar } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import { Layout } from '@/shared/ui/layout';

export default function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();

  console.log(session);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <CircularProgress size={80} />
      ) : (
        <>
          <Paper elevation={10} sx={{ padding: 3, marginTop: 5 }} variant="elevation">
            <Avatar sx={{ width: 100, height: 100, marginBottom: 2 }} src={session?.user?.image || ''} />
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Profile Info:
            </Typography>
            <Typography variant="body1">Name: {session?.user?.name}!</Typography>
            <Typography variant="body1">Email: {session?.user?.email}</Typography>
          </Paper>
        </>
      )}
    </Layout>
  );
}
