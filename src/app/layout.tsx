'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useScrollAnimation()

  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <title>Md. Meheduz Zaman - Portfolio</title>
        <meta name="description" content="Computer Science & Engineering Student passionate about robotics, AI, and building intelligent systems." />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}