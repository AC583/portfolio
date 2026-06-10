import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// @ts-ignore - allow side-effect CSS import without type declarations
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-surface text-on-background min-h-screen antialiased">{children}</body>
    </html>
  )
}