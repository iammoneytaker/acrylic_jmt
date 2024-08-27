import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { portfolioData } from './data';
import { SkeletonCategoryCard } from './Skeleton';

export const metadata: Metadata = {
  title: '포트폴리오',
  description:
    '아크릴 맛집의 아크릴 주문제작에 대한 다양한 포트폴리오를 확인해 보세요.',
  keywords:
    '아크릴포트폴리오,아크릴제작사례,아크릴주문제작,아크릴제품,아크릴갤러리,아크릴주문제작사례',
};

export default function PortfolioMain() {
  return (
    <main className="container mx-auto py-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 px-4">
        아크릴 주문제작 포트폴리오
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {portfolioData.length === 0
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCategoryCard key={index} />
            ))
          : portfolioData.map((category) => (
              <Link
                key={category.id}
                href={`/portfolio/${category.id}`}
                className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand"
              >
                <div className="relative">
                  <Image
                    src={category.thumbnailUrl}
                    alt={category.name}
                    width={300}
                    height={300}
                    className="w-full h-40 object-cover mb-4 rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity duration-300 hover:bg-opacity-30 rounded-lg">
                    <span className="text-white text-lg font-semibold opacity-0 transition-opacity duration-300 hover:opacity-100">
                      자세히 보기
                    </span>
                  </div>
                </div>
                <h2 className="text-lg font-semibold mb-2">{category.name}</h2>
              </Link>
            ))}
      </div>
    </main>
  );
}
