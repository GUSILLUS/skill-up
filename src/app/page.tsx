'use client'
import React from 'react';
import { MainForm } from './features/main-form'
import { useEffect, useState } from 'react'
import { Button, CircularProgress } from '@material-ui/core';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);

  }, [])

  const router = useRouter()

  const onClick = () => {
    router.push('/i18next')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-12 lg:p-24">
      {isLoading ? <CircularProgress size={80} /> : (
        <>
          <MainForm />
  
          <Button 
            fullWidth={false}
            size="large"
            onClick={onClick}
            variant="contained"
            color="primary"
          >
            Go to i18next
          </Button>
        </>
      )}
    </main>
  )
}
