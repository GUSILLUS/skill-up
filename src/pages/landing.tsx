'use client';
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';

import { LandingPage } from '@/features/landing-page';
import { Layout } from '@/shared/ui/layout';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

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
        <Fade duration={1200} delay={200} className="w-full md:w-1/2">
          <LandingPage />
        </Fade>
      )}
    </Layout>
  );
}
