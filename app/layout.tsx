import React from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { Inter, Inconsolata } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
// const inconsolata = Inconsolata({ subsets:['latin']});

export const metada: Metadata = {
  title: 'Next.js Project',
  description: 'A Next.js project with TypeScript and TailwindCSS',
  keywords: 'Next.js TypeScript, TailwindCSS',
};

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return <html lang='en'>
    <body className={inter.className}>
      <Navbar />
      <main className='max-w-3xl mx-auto py-10'>{children}</main>
    </body>
  </html>
}