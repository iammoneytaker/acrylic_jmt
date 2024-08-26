'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { getCategoryNameById, getProductByNo } from '../../data';
import { SkeletonProductDetail } from '../../Skeleton';
import { IoIosArrowBack } from 'react-icons/io';
import { useState, useEffect } from 'react';

export async function generateMetadata({
  params,
}: {
  params: { category: string; productNo: string };
}): Promise<Metadata> {
  const product = getProductByNo(params.category, parseInt(params.productNo));
  const categoryName = getCategoryNameById(params.category);

  return {
    title: product
      ? `${product.name} | ${categoryName} | 아크릴 맛집 포트폴리오`
      : '제품을 찾을 수 없습니다',
    description: product
      ? `아크릴 맛집의 ${categoryName} 카테고리에 속한 ${product.name} 제품입니다. ${product.description}`
      : '요청하신 제품을 찾을 수 없습니다.',
    keywords: product
      ? `${product.name},${categoryName},아크릴${categoryName},${product.name}제작사례,아크릴맛집${categoryName}`
      : '',
  };
}

export default function PortfolioItem({
  params,
}: {
  params: { category: string; productNo: string };
}) {
  const product = getProductByNo(params.category, parseInt(params.productNo));
  const categoryName = getCategoryNameById(params.category);
  const [imagePaths, setImagePaths] = useState<string[]>([]);

  useEffect(() => {
    if (product) {
      const loadImages = async () => {
        const paths = [];
        for (let i = 1; i <= 10; i++) {
          // 최대 10개의 이미지를 가정
          const path = `/images/portfolio/${params.category}/${product.no}/${i}.png`;
          try {
            // 이미지 존재 여부 확인
            await fetch(path, { method: 'HEAD' });
            paths.push(path);
          } catch (error) {
            // 이미지가 없으면 중단
            break;
          }
        }
        setImagePaths(paths);
      };
      loadImages();
    }
  }, [product, params.category]);

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
                <div key={image} className="mb-4">
                  <Image
                    src={image}
                    alt={`${product.name} 이미지 ${index + 1}`}
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
