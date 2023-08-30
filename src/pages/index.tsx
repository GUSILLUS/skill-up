'use client'
import React from 'react';
import { MainForm } from '../features/main-form'
import { useEffect, useState } from 'react'
import { Button, CircularProgress } from '@material-ui/core';
import { useRouter } from 'next/navigation';
import { Layout } from '@/shared/ui/layout/layout';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);

  }, [])

  const router = useRouter()

  const onClick18 = () => {
    router.push('/i18next')
  }

  const onClickRtkq = () => {
    router.push('/rtkq')
  }

  return (
    <Layout>
      {isLoading ? <CircularProgress size={80} /> : (
        <>
          <MainForm />


          <div className='flex gap-2'>
            <Button 
              fullWidth={false}
              size="large"
              onClick={onClick18}
              variant="contained"
              color="primary"
            >
              Go to i18next
            </Button>

            <Button 
              fullWidth={false}
              size="large"
              onClick={onClickRtkq}
              variant="contained"
              color="primary"
            >
              Go to RTKQ
            </Button>
          </div>
        </>
      )}
    </Layout>
  )
}
