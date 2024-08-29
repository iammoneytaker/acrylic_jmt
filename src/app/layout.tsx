import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | 아크릴맛집',
    default: '아크릴맛집',
  },
  description:
    '아크릴을 맛있게 주문제작 해드립니다. 간판, 인테리어 소품, 아크릴 굿즈, 문손잡이, 아크릴박스 등 다양한 아크릴 제품을 만나보세요.',
  keywords:
    '아크릴맛집,아크릴주문제작,아크릴제품,아크릴간판,아크릴인테리어,아크릴굿즈,아크릴문손잡이,아크릴박스',
  openGraph: {
    title: '아크릴맛집 - 아크릴 주문제작 전문',
    description:
      '아크릴을 맛있게 주문제작 해드립니다. 간판, 인테리어 소품, 아크릴 굿즈, 문손잡이, 아크릴박스 등 다양한 아크릴 제품을 만나보세요.',
    url: 'https://acrylic-jmt.vercel.app', // TODO: 나중에 도메인 수정 후 변경해야함.
    siteName: '아크릴맛집',
    images: [
      {
        url: 'https://acrylic-jmt.vercel.app/images/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '아크릴맛집 - 아크릴 주문제작 전문',
    description:
      '아크릴을 맛있게 주문제작 해드립니다. 간판, 인테리어 소품, 아크릴 굿즈, 문손잡이, 아크릴박스 등 다양한 아크릴 제품을 만나보세요.',
    creator: '@acrylicjmt',
    images: ['https://acrylic-jmt.vercel.app/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://acrylic-jmt.vercel.app',
  },
  other: {
    'naver-site-verification': '9118decf336d6a924c606148166d4fda23478bf0',
  },
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
