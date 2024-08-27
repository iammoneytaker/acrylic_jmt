import Image from 'next/image';
import Link from 'next/link';
import { getCategoryById } from '../data';
import { SkeletonProductCard } from '../Skeleton';
import { IoIosArrowBack } from 'react-icons/io';

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
    keywords: category
      ? `${category.name},아크릴${category.name},${category.name}포트폴리오,${category.name}제작사례,아크릴맛집${category.name}`
      : '',
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

  // 최신순으로 제품 정렬
  const sortedProducts = [...category.products].sort((a, b) => b.no - a.no);

  return (
    <main className="container mx-auto py-12">
      <Link href="/portfolio" className="flex items-center mb-8 text-brand">
        <IoIosArrowBack className="text-2xl mr-2 text-brand" />
        <span>포트폴리오로 돌아가기</span>
      </Link>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
        {category.name}
      </h1>

      <div className="grid grid-cols-2 gap-6">
        {sortedProducts.length === 0
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonProductCard key={index} />
            ))
          : sortedProducts.map((product) => (
              <Link
                key={product.no}
                href={`/portfolio/${category.id}/${product.no}`}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand"
              >
                <div className="relative">
                  <Image
                    src={`/images/portfolio/${category.id}/${product.no}/thumbnail.png`}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity duration-300 hover:bg-opacity-30">
                    <span className="text-white text-lg font-semibold opacity-0 transition-opacity duration-300 hover:opacity-100">
                      자세히 보기
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                </div>
              </Link>
            ))}
      </div>
    </main>
  );
}
