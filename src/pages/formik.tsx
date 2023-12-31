'use client';
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';

import { Layout } from '@/shared/ui/layout';

import { MainForm } from '../features/main-form';

export default function Home() {
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
        <Fade duration={1200} delay={200}>
          <MainForm />
        </Fade>
      )}
    </Layout>
  );
}
