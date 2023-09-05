'use client';
import { Button, CircularProgress, Paper, Typography } from '@mui/material';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Fade, AttentionSeeker, Zoom } from 'react-awesome-reveal';

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
            <Zoom direction="up" duration={1200} className="w-12/12">
              <Paper
                elevation={10}
                sx={{ padding: 3, marginTop: 5 }}
                variant="elevation"
                className="flex flex-col gap-3"
              >
                <AttentionSeeker effect="tada" delay={900} duration={1000}>
                  <Typography variant="h4" gutterBottom textAlign="center" className="text-2xl sm:text-4xl">
                    You have full acces ^_^
                  </Typography>
                </AttentionSeeker>
              </Paper>
            </Zoom>
          ) : (
            <>
              <Zoom direction="up" duration={1200} className="w-2/3 lg:w-1/3">
                <Paper
                  elevation={10}
                  sx={{ padding: 3, marginTop: 5 }}
                  variant="elevation"
                  className="flex flex-col gap-3"
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
                        <Fade duration={1400}>
                          <Button fullWidth variant="contained" color="primary" onClick={() => signIn()}>
                            Sign In
                          </Button>
                        </Fade>
                        <Fade>
                          <Typography
                            variant="caption"
                            className="flex flex-col md:flex-row justify-center items-center"
                          >
                            if you dont have an account you can
                            <Button
                              variant="text"
                              color="primary"
                              className="p-0"
                              size="small"
                              onClick={() => setSignup(true)}
                              style={{ textTransform: 'none', padding: '0' }}
                            >
                              sign up
                            </Button>
                          </Typography>
                        </Fade>
                      </>
                    )}
                  </div>
                </Paper>
              </Zoom>
            </>
          )}
        </>
      )}
    </Layout>
  );
}
