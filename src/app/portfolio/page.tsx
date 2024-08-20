import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { portfolioData } from './data';

export const metadata: Metadata = {
  title: '포트폴리오',
  description:
    '아크릴 맛집의 아크릴 주문제작에 대한 다양한 포트폴리오를 확인해 보세요.',
};

export default function PortfolioMain() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
        포트폴리오
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.map((category) => (
          <Link key={category.id} href={`/portfolio/${category.id}`}>
            <div className="bg-gray-100 p-6 rounded shadow">
              <Image
                src={category.thumbnailUrl}
                alt={category.name}
                width={300}
                height={200}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-bold mb-2">{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
