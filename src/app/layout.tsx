import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | 아크릴맛집',
    default: '아크릴맛집',
  },
  description:
    '아크릴을 맛있게 주문제작 해드립니다. 간판, 인테리어 소품, 아크릴 굿즈, 문손잡이, 아크릴박스 등 다양한 아크릴 제품을 만나보세요.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
