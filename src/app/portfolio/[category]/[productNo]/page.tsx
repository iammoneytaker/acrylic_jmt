import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { getCategoryNameById, getProductByNo } from '../../data';
import { SkeletonProductDetail } from '../../Skeleton';
import { IoIosArrowBack } from 'react-icons/io';

export async function generateMetadata({
  params,
}: {
  params: { category: string; productNo: string };
}): Promise<Metadata> {
  const product = getProductByNo(params.category, parseInt(params.productNo));

  return {
    title: product
      ? `${product.name} | 아크릴 맛집`
      : '제품을 찾을 수 없습니다',
    description: product
      ? product.description
      : '요청하신 제품을 찾을 수 없습니다.',
  };
}

export default function PortfolioItem({
  params,
}: {
  params: { category: string; productNo: string };
}) {
  const product = getProductByNo(params.category, parseInt(params.productNo));
  const categoryName = getCategoryNameById(params.category);

  if (!product) {
    return (
      <div className="container mx-auto py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          제품을 찾을 수 없습니다
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

  const imagePaths = [
    `/images/portfolio/${params.category}/${product.no}/1.png`,
    `/images/portfolio/${params.category}/${product.no}/2.png`,
    `/images/portfolio/${params.category}/${product.no}/3.png`,
  ];

  return (
    <main className="container mx-auto py-12">
      {product ? (
        <>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            {product.name}
          </h1>

          <Link
            href={`/portfolio/${params.category}`}
            className="flex items-center mb-8 text-brand"
          >
            <IoIosArrowBack className="text-2xl mr-2" />
            <span>{categoryName} 카테고리로 돌아가기</span>
          </Link>

          <div className="mb-8">
            {/* 이미지 캐러셀 */}
            <div className="relative">
              {imagePaths.map((image, index) => (
                <div key={image}>
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
        </>
      ) : (
        <SkeletonProductDetail />
      )}
    </main>
  );
}
