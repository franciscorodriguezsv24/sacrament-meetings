import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
});

const lora = Lora({
  variable: '--font-heading',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Sacrament Meeting Planner',
    template: '%s | Sacrament Meeting Planner',
  },
  description: 'Plan, review, and print sacrament meeting programs.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="mx-auto w-full max-w-4xl flex-1 px-page py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
