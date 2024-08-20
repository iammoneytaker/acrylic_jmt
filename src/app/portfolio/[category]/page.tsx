import Image from 'next/image';
import Link from 'next/link';
import { getCategoryById } from '../data';
import { SkeletonProductCard } from '../Skeleton';

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  const category = getCategoryById(params.category);

  return {
    title: category ? `${category.name} | 아크릴 맛집` : '카테고리 Not Found',
    description: category
      ? `아크릴 맛집의 ${category.name} 카테고리 포트폴리오입니다.`
      : '요청하신 카테고리를 찾을 수 없습니다.',
  };
}

export default function PortfolioCategory({
  params,
}: {
  params: { category: string };
}) {
  const category = getCategoryById(params.category);

  if (!category) {
    return (
      <div className="container mx-auto py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          카테고리를 찾을 수 없습니다
        </h1>
        <Link href="/portfolio" className="text-brand">
          포트폴리오로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <main className="container mx-auto py-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
        {category.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.products.length === 0
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonProductCard key={index} />
            ))
          : category.products.map((product) => (
              <Link
                key={product.no}
                href={`/portfolio/${category.id}/${product.no}`}
              >
                <div className="bg-white rounded shadow overflow-hidden transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand">
                  <Image
                    src={`/images/portfolio/${category.id}/${product.no}/thumbnail.png`}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </main>
  );
}
