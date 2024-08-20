export interface Product {
  id: string;
  name: string;
  description: string;
  images: string[];
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
    thumbnailUrl: '/images/categories/acrylic-box-thumbnail.jpg',
    products: [
      {
        id: 'transparent-organizer',
        name: '투명 정리 박스',
        description: '투명 정리 박스에 대한 자세한 설명입니다.',
        images: [
          '/images/portfolio/acrylic-box-1-1.jpg',
          '/images/portfolio/acrylic-box-1-2.jpg',
          '/images/portfolio/acrylic-box-1-3.jpg',
        ],
      },
      // ... 다른 제품들 ...
    ],
  },
  {
    id: 'acrylic-door-handle',
    name: '아크릴 문손잡이',
    thumbnailUrl: '/images/categories/acrylic-door-handle-thumbnail.jpg',
    products: [
      // ... 아크릴 문손잡이 제품들 ...
    ],
  },
  {
    id: 'business-product',
    name: '사업화 제품',
    thumbnailUrl: '/images/categories/business-product-thumbnail.jpg',
    products: [
      // ... 사업화 제품들 ...
    ],
  },
  // ... 다른 카테고리들 ...
];

export function getCategoryById(id: string): Category | undefined {
  return portfolioData.find((category) => category.id === id);
}

export function getProductById(
  categoryId: string,
  productId: string
): Product | undefined {
  const category = getCategoryById(categoryId);
  return category?.products.find((product) => product.id === productId);
}
