import React from "react"
import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'GSF - Venta de SOFOM',
  description: 'Expertos especializados en estructuración de SOFOM. Te ayudamos a adquirir una SOFOM ENR y comenzar operaciones en México.',
  generator: 'v0.app',
  icons: {
    icon: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${montserrat.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
