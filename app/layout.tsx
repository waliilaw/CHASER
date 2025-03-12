import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chaser',
  description: 'Created with v0',
  generator: 'v0.dev',
  icons:{
    icon:"/favicon"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
