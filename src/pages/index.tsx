'use client';
import { Button, CircularProgress, Paper, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import { FormikSignupForm } from '@/features/formik-signup-form';
import { Layout } from '@/shared/ui/layout';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();

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
          {session?.user ? (
            <Paper elevation={10} sx={{ padding: 3, marginTop: 5 }} variant="elevation" className="flex flex-col gap-3">
              <Typography variant="h4" gutterBottom textAlign="center">
                You have full acces ^_^
              </Typography>
            </Paper>
          ) : (
            <>
              <Paper
                elevation={10}
                sx={{ padding: 3, marginTop: 5 }}
                variant="elevation"
                className="flex flex-col gap-3"
              >
                <Typography variant="h4" gutterBottom textAlign="center">
                  Sign In Required
                </Typography>
                <Typography variant="body1">To see all content, you need to sign in.</Typography>
                <Button variant="contained" color="primary" href="/api/auth/signin">
                  Sign In
                </Button>
              </Paper>

              <FormikSignupForm />
            </>
          )}
        </>
      )}
    </Layout>
  );
}
