import { Metadata } from 'next';
import {
  getCategoryNameById,
  getProductByNo,
  getCategories,
  getProducts,
} from '../../data';
import PortfolioItemClient from './PortfolioItemClient';
import fs from 'fs/promises';
import path from 'path';

export async function generateStaticParams() {
  const categories = getCategories();
  const params = [];

  for (const category of categories) {
    const products = getProducts(category.id);
    for (const product of products) {
      params.push({ category: category.id, productNo: product.no.toString() });
    }
  }

  return params;
}

async function getExistingImagePaths(category: string, productNo: string) {
  const basePath = path.join(
    process.cwd(),
    'public',
    'images',
    'portfolio-compressed',
    category,
    productNo
  );
  const imagePaths = [];

  for (let i = 1; i <= 10; i++) {
    const imagePath = `/images/portfolio-compressed/${category}/${productNo}/${i}.webp`;
    try {
      await fs.access(path.join(process.cwd(), 'public', imagePath));
      imagePaths.push(imagePath);
    } catch (error) {
      // 파일이 존재하지 않으면 무시
    }
  }

  return imagePaths;
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; productNo: string };
}): Promise<Metadata> {
  const product = getProductByNo(params.category, parseInt(params.productNo));
  const categoryName = getCategoryNameById(params.category);

  return {
    title: product
      ? `${product.name} | ${categoryName} | 아크릴맛집 포트폴리오`
      : '제품을 찾을 수 없습니다',
    description: product
      ? `아크릴맛집의 ${categoryName} 카테고리에 속한 ${product.name} 제품입니다. ${product.description}`
      : '요청하신 제품을 찾을 수 없습니다.',
    keywords: product
      ? `${product.name},${categoryName},아크릴${categoryName},${product.name}제작사례,아크릴맛집${categoryName}`
      : '',
  };
}

export default async function PortfolioItem({
  params,
}: {
  params: { category: string; productNo: string };
}) {
  const product = getProductByNo(params.category, parseInt(params.productNo));
  const categoryName = getCategoryNameById(params.category);
  const imagePaths = await getExistingImagePaths(
    params.category,
    params.productNo
  );

  return (
    <PortfolioItemClient
      product={product}
      categoryName={categoryName}
      imagePaths={imagePaths}
      params={params}
    />
  );
}
