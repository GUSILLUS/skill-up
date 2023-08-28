'use client'

import { MainForm } from './features/main-form'
import { useEffect, useState } from 'react'
import { CircularProgress } from '@material-ui/core';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);

  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 lg:p-24">
      {isLoading ? <CircularProgress size={80} /> : <MainForm />}
    </main>
  )
}
