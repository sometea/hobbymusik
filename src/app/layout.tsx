import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { NavBar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'hobbymusik',
  description: 'musik ist unser hobby',
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header><NavBar /></header>
        <main className="flex min-h-[50vh] flex-col items-start justify-between p-8 lg:p-24 lg:max-w-6xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
