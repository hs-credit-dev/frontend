import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/app/_components/header/header';
import Footer from '@/app/_components/footer/footer';
import './globals.css'
import WelcomeBanner from './students/dashboard/WelcomeBanner';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HS.Credit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
          <Header actionType='standard'/>
		  <WelcomeBanner />
            <main>
            {children}
            </main>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
