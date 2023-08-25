'use client'

import Image from 'next/image'
import { eventMetric } from './gtag'
import { MainForm } from '@/components/mainForm'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <h1 className="text-xl">
        Sign in
      </h1>

      <MainForm classNames="flex flex-col items-center gap-2 bg-gray-300 p-5 rounded-md" />
    </main>
  )
}
