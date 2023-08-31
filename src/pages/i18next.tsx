'use client';
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';

import { Layout } from '@/shared/ui/layout';

import { LanguageSwitcher } from '../features/language-switcher';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return <Layout>{isLoading ? <CircularProgress size={80} /> : <LanguageSwitcher />}</Layout>;
}
