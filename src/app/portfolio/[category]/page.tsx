import Image from 'next/image';
import Link from 'next/link';
import { getCategoryById } from '../data';

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
    <div className="container mx-auto py-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
        {category.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.products.map((product) => (
          <Link
            key={product.id}
            href={`/portfolio/${category.id}/${product.id}`}
          >
            <Image
              src={product.images[0]}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
