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
    name: '아크릴 박스',
    thumbnailUrl: '/images/portfolio/acrylic-box/thumbnail.png',
    products: [
      {
        no: 1,
        name: '대형 오픈 쇼케이스',
        description: '쇼케이스로 사용할 수 있는 투명한 박스입니다.',
      },
      {
        no: 2,
        name: '아크릴바구니',
        description:
          '다양한 제품들을 담아서 사용할 수 있는 아크릴바구니입니다.',
      },
      {
        no: 3,
        name: '아크릴 보관 및 받침대',
        description: '제품을 넣어서 받침대로 사용한 사례입니다.',
      },
      {
        no: 4,
        name: '넓고 긴 아크릴케이스',
        description:
          '높이는 낮지만 넓은 형태의 아크릴박스입니다. 한쪽 면이 열리고 닫히는 것이 특징입니다.',
      },
      {
        no: 5,
        name: '오각형아크릴박스',
        description:
          '기존의 박스의 형태가 아닌 오각형의 모양이 특징인 박스입니다.',
      },
      {
        no: 1,
        name: '대형 오픈 쇼케이스',
        description: '쇼케이스로 사용할 수 있는 투명한 박스입니다.',
      },
      {
        no: 1,
        name: '대형 오픈 쇼케이스',
        description: '쇼케이스로 사용할 수 있는 투명한 박스입니다.',
      },
      {
        no: 1,
        name: '대형 오픈 쇼케이스',
        description: '쇼케이스로 사용할 수 있는 투명한 박스입니다.',
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
      {
        no: 1,
        name: '갈색 인테리어 문손잡이',
        description:
          '불광이 특징인 문손잡이입니다. 인테리어 업체의 문손잡이입니다.',
      },
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
  {
    id: 'signboard',
    name: '간판',
    thumbnailUrl: '/images/portfolio/signboard/thumbnail.png',
    products: [
      // ... 간판 제품들 ...
    ],
  },
  {
    id: 'popup',
    name: '팝업스토어',
    thumbnailUrl: '/images/portfolio/popup/thumbnail.png',
    products: [
      // ... 간판 제품들 ...
    ],
  },
  {
    id: 'furniture',
    name: '아크릴가구',
    thumbnailUrl: '/images/portfolio/furniture/thumbnail.png',
    products: [
      // ... 가구 제품들 ...
    ],
  },
  {
    id: 'art',
    name: '예술 및 졸업작품',
    thumbnailUrl: '/images/portfolio/art/thumbnail.png',
    products: [
      // ... 예술 제품들 ...
    ],
  },
  {
    id: 'construction',
    name: '시공사례',
    thumbnailUrl: '/images/portfolio/construction/thumbnail.png',
    products: [
      // ... 시공사례 제품들 ...
    ],
  },
  {
    id: 'etc',
    name: '기타 소품 및 개별제작',
    thumbnailUrl: '/images/portfolio/etc/thumbnail.png',
    products: [
      // ... 기타 소품 및 개별제작 제품들 ...
    ],
  },
  // ... 다른 카테고리들 ...
];

export function getCategoryById(id: string): Category | undefined {
  return portfolioData.find((category) => category.id === id);
}

export function getCategoryNameById(id: string): string | undefined {
  const category = getCategoryById(id);
  return category?.name;
}

export function getProductByNo(
  categoryId: string,
  productNo: number
): Product | undefined {
  const category = getCategoryById(categoryId);
  return category?.products.find((product) => product.no === productNo);
}
