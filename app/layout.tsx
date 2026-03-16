import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weights: [400, 600, 700, 800] })
const inter = Inter({ subsets: ["latin"], weights: [400, 500] })

export const metadata: Metadata = {
  title: 'Antoine PELTIER - Développeur iOS Senior | Portfolio',
  description: 'Portfolio d\'Antoine PELTIER, développeur iOS senior spécialisé dans les applications natives performantes. 6+ ans d\'expérience, 10K+ téléchargements. Compétences: Swift, SwiftUI, MVVM, Clean Architecture.',
  generator: 'v0.app',
  keywords: ['iOS', 'Développeur iOS', 'Swift', 'SwiftUI', 'Mobile', 'Application', 'Portfolio'],
  openGraph: {
    title: 'Antoine PELTIER - Développeur iOS Senior',
    description: 'Portfolio professionnel de développeur iOS senior avec 6+ ans d\'expérience',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${plusJakartaSans.className}`}>
      <body className="font-body antialiased bg-black text-white">
        <style>{`
          :root {
            --font-display: ${plusJakartaSans.style.fontFamily};
            --font-body: ${inter.style.fontFamily};
          }
        `}</style>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
