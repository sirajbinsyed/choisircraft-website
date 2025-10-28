import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Choisir-Craft',
  description: 'Created with Choisircraft',
  generator: 'Choisir-Craft',
  icons: {
    icon: '/choisir-craft-logo.jpg', // 👈 this adds your logo to the browser tab
  },
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
