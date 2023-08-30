'use client'
import React from "react";
import { Button, CircularProgress } from "@material-ui/core";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "../features/language-switcher";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);

  }, [])

  const router = useRouter()

  const onClickFormik = () => {
    router.push('/')
  }

  const onClickRtkq = () => {
    router.push('/rtkq')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-12 lg:p-24">
      {isLoading ? <CircularProgress size={80} /> : (
        <>
          <LanguageSwitcher />
        
          <div className='flex gap-2'>
            <Button 
              fullWidth={false}
              size="large"
              onClick={onClickFormik}
              variant="contained"
              color="primary"
            >
              Go to Formik
            </Button>

            <Button 
              fullWidth={false}
              size="large"
              onClick={onClickRtkq}
              variant="contained"
              color="primary"
            >
              Go to Rtkq
            </Button>
          </div>
        </>
      )}
    </main>
  )
}