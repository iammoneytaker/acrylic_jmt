import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';

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
    url: 'https://www.acrylic-jmt.co.kr',
    siteName: '아크릴맛집',
    images: [
      {
        url: 'https://www.acrylic-jmt.co.kr/images/og-image.png',
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
    images: ['https://www.acrylic-jmt.co.kr/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.acrylic-jmt.co.kr',
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
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: '아크릴맛집',
              image: 'https://www.acrylic-jmt.co.kr/images/og-image.png',
              '@id': 'https://www.acrylic-jmt.co.kr',
              url: 'https://www.acrylic-jmt.co.kr',
              email: 'official.uone@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '을지로33길 33, 청자빌딩 201호',
                addressLocality: '서울특별시',
                addressRegion: '중구',
                postalCode: '04551',
                addressCountry: 'KR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 37.5665,
                longitude: 126.978,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                ],
                opens: '09:00',
                closes: '18:00',
              },
              sameAs: [
                'https://www.instagram.com/acryl_jmt/',
                'https://www.youtube.com/@%EC%95%84%ED%81%AC%EB%A6%B4%EB%A7%9B%EC%A7%91',
                'https://blog.naver.com/official_uone',
              ],
            }),
          }}
        />
      </head>
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
