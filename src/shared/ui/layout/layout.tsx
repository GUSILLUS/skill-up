'use client'

import React from 'react'

export function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-12 lg:p-24">
      {children}
    </main>
  )
}
