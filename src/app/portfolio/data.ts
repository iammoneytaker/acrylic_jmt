export interface Product {
  no: number;
  name: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  thumbnailUrl: string;
  products: Product[];
}

export const portfolioData: Category[] = [
  {
    id: 'acrylic-box',
    name: '아크릴 상자',
    thumbnailUrl: '/images/portfolio/acrylic-box/thumbnail.png',
    products: [
      {
        no: 1,
        name: '투명 정리 박스',
        description: '투명 정리 박스에 대한 자세한 설명입니다.',
      },
      // ... 다른 제품들 ...
    ],
  },
  {
    id: 'acrylic-door-handle',
    name: '아크릴 문손잡이',
    thumbnailUrl: '/images/portfolio/acrylic-door-handle/thumbnail.png',
    products: [
      // ... 아크릴 문손잡이 제품들 ...
    ],
  },
  {
    id: 'business-product',
    name: '사업화 제품',
    thumbnailUrl: '/images/portfolio/business-product/thumbnail.png',
    products: [
      // ... 사업화 제품들 ...
    ],
  },
  // ... 다른 카테고리들 ...
];

export function getCategoryById(id: string): Category | undefined {
  return portfolioData.find((category) => category.id === id);
}

export function getProductByNo(
  categoryId: string,
  productNo: number
): Product | undefined {
  const category = getCategoryById(categoryId);
  return category?.products.find((product) => product.no === productNo);
}
