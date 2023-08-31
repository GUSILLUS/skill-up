'use client';
import { Button, CircularProgress, Paper, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import { FormikSignupForm } from '@/features/formik-signup-form';
import { Layout } from '@/shared/ui/layout';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();
  const [singup, setSignup] = useState(false);

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
                className="flex flex-col gap-3 w-1/2"
              >
                <Typography variant="h4" gutterBottom textAlign="center">
                  Sign In/Up Required
                </Typography>
                <Typography variant="body1" textAlign="center">
                  To see all content, you need to sign in.
                </Typography>
                <div className="flex flex-col gap-2">
                  {singup ? (
                    <>
                      <FormikSignupForm />
                      <Typography variant="caption" className="flex justify-center items-center text-[]">
                        if you have an account you can
                        <Button
                          variant="text"
                          color="primary"
                          size="small"
                          onClick={() => setSignup(false)}
                          style={{ textTransform: 'none', padding: '0' }}
                        >
                          sign in
                        </Button>
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Button variant="contained" color="primary" href="/api/auth/signin">
                        Sign In
                      </Button>
                      <Typography variant="caption" className="flex justify-center items-center">
                        if you dont have an account you can
                        <Button
                          variant="text"
                          color="primary"
                          size="small"
                          onClick={() => setSignup(true)}
                          style={{ textTransform: 'none', padding: '0' }}
                        >
                          sign up
                        </Button>
                      </Typography>
                    </>
                  )}
                </div>
              </Paper>
            </>
          )}
        </>
      )}
    </Layout>
  );
}
