import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700", "800"] // "weights" -> "weight"
})

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["400", "500"] // "weights" -> "weight"
})

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
    icon: '/antoine-peltier.png',  
    apple: '/antoine-peltier.png',  
  }
} // Ajout de l'accolade fermante manquante

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