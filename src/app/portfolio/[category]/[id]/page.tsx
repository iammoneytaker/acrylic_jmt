import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { getProductById } from '../../data';

export async function generateMetadata({
  params,
}: {
  params: { category: string; id: string };
}): Promise<Metadata> {
  const product = getProductById(params.category, params.id);

  if (!product) {
    return {
      title: '404 Not Found',
    };
  }

  return {
    title: `아크릴 맛집 - ${product.name}`,
    description: product.description,
  };
}

export default function PortfolioItem({
  params,
}: {
  params: { category: string; id: string };
}) {
  const product = getProductById(params.category, params.id);

  if (!product) {
    return (
      <div className="container mx-auto py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          404 Not Found
        </h1>
        <p className="text-lg mb-8">
          요청하신 포트폴리오 아이템을 찾을 수 없습니다.
        </p>
        <Link href="/portfolio" className="text-brand">
          포트폴리오로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
        {product.name}
      </h1>

      <div className="mb-8">
        {/* 이미지 캐러셀 */}
        <div className="relative">
          {product.images.map((image, index) => (
            <div key={image} className={`${index === 0 ? 'block' : 'hidden'}`}>
              <Image
                src={image}
                alt={product.name}
                width={1200}
                height={800}
                className="w-full h-auto rounded"
              />
            </div>
          ))}
        </div>
      </div>

      <p className="text-lg mb-8">{product.description}</p>

      <Link href={`/portfolio/${params.category}`} className="text-brand">
        {params.category} 카테고리로 돌아가기
      </Link>
    </div>
  );
}
