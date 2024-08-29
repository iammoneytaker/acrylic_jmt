// src/app/portfolio/[category]/[productNo]/PortfolioItemClient.tsx

'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import { SkeletonProductDetail } from '../../Skeleton';
import { Product } from '../../data';

interface PortfolioItemClientProps {
  product: Product | undefined;
  categoryName: string | undefined;
  imagePaths: string[];
  params: { category: string; productNo: string };
}

export default function PortfolioItemClient({
  product,
  categoryName,
  imagePaths,
  params,
}: PortfolioItemClientProps) {
  if (!product) {
    return (
      <div className="container mx-auto py-12 px-4">
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
    <main className="container mx-auto py-12 px-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {imagePaths.map((image, index) => (
            <div key={image}>
              <Image
                src={image}
                alt={`${product.name} 이미지 ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto rounded"
              />
            </div>
          ))}
        </div>
      </div>
      <p className="text-lg mb-8 text-justify">{product.description}</p>
    </main>
  );
}
