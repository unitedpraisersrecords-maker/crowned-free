import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crowned and Free - Christian Rock Folk Country Music',
  description: 'Steve Allott and Frances Allott - Christian artists bringing rock, folk, and country music. Book live performances and discover the Wisdom Is podcast.',
  keywords: 'Christian music, rock, folk, country, Crowned and Free, Steve Allott, Frances Allott, Wisdom Is podcast, United Praisers',
  authors: [{ name: 'Steve Allott' }, { name: 'Frances Allott' }],
  openGraph: {
    title: 'Crowned and Free - Christian Rock Folk Country Music',
    description: 'Steve Allott and Frances Allott - Christian artists bringing rock, folk, and country music. Book live performances and discover the Wisdom Is podcast.',
    type: 'website',
    locale: 'en_GB',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}
