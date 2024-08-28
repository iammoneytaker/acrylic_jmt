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
        no: 6,
        name: '이산화탄소 포집기커버',
        description:
          '이산화탄소 포집기의 커버를 씌우기 위해 만든 것입니다. 흑색의 아크릴을 사용했으며, 전원 코드에는 투명 아크릴을 활용해서 덮개를 제작했습니다.',
      },
      {
        no: 7,
        name: '전시용 라이트박스',
        description:
          '전시회에서 시연을 하기 위해 아크릴과 조명을 활용한 특수 제작된 라이트박스입니다.',
      },
      {
        no: 8,
        name: '특대형아크릴박스',
        description:
          '촬영을 위해 제작된 아크릴박스입니다. 크기가 3m가 넘어서 특대라고 이름을 붙이게 된 박스입니다. 공장 인원 전부 야근을 하면서 하루 만에 만들었던 기억이 있네요 ㅎㅎ 지금은 다른 주문 건이 많아서 어쩔 수 없이 오래 걸리지만, 그 시절이 생각나서 적어보았습니다.',
      },
      {
        no: 9,
        name: '아크릴케이지',
        description:
          '어떤 동물이었는지 기억이 나지 않는데, 아마 도마뱀케이지 였던 것 같습니다. 크기는 600 *600 *600 정사이즈로 제작되었습니다 ㅎㅎ. 사진을 보시면 다이아컷팅이 된 모습을 볼 수 있습니다.',
      },
      {
        no: 10,
        name: '프린터기커버',
        description:
          '프린터기에 먼지가 들어가지 않게 제작된 아크릴 케이스입니다. 문을 열고 닫을 수 있으며, 뒤에는 코드선을 정리할 수 있는 구멍을 뚫어둔 것이 특징입니다.',
      },
      {
        no: 11,
        name: '오픈형 아크릴박스',
        description:
          '경첩과 잠금장치를 활용해 전면에서 열고 닫을 수 있도록 제작된 오픈형 아크릴케이스입니다.',
      },
      {
        no: 12,
        name: '대형 불투명 아크릴박스',
        description:
          '흰색의 아크릴판을 활용해서 제작된 대형 아크릴박스입니다. 아래에는 지지할 수 있는 지지대가 있는 것이 특징이며 칸막이로 구분되는 것 또한 특징입니다.',
      },
      {
        no: 13,
        name: '강아지케이지',
        description:
          '손잡이가 달려 있어 들고 다닐 수 있으며, 내부에는 강아지가 들어간다고 하셔서 쇠가 달린 부분은 모두 실리콘 처리를 해달라 하셨습니다. 또한 판마다 구멍을 조금씩 뚫어 숨구멍을 만들어주었습니다.',
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
      {
        no: 2,
        name: '원형 강화도어 문손잡이',
        description:
          '원형 강화도어 문손잡이입니다. 갈색의 동그란 원의 모양이 특징입니다. 또한 원홀의 문에 넣을 수 있습니다.',
      },
      {
        no: 3,
        name: '투홀형 청록색 문손잡이',
        description:
          '청록색의 아크릴판을 사용해서 제작된 문손잡이입니다. 길이가 길어 안정성이 중요시 되는 부분이라 뒤에 철을 덧대준 모습이 특징입니다.',
      },
      {
        no: 4,
        name: '오렌지색 문손잡이(언더바파스타)',
        description:
          '언더바파스타 집에서 문손잡이를 오렌지색으로 하고 싶다는 요청이 와서 제작 후 조명과 함께 시공했던 기억이 있네요 ㅎㅎ',
      },
      {
        no: 5,
        name: 'nerd 미용실 문손잡이',
        description:
          '원형 강화도어 문손잡이입니다. 미용실의 간판과 문손잡이를 시공했던 기억이 있네요 ㅎㅎ',
      },
      {
        no: 6,
        name: '만탁문손잡이(오렌지)',
        description:
          '오렌지색의 아크릴 문손잡이입니다. 만탁이라는 가게의 문손잡이를 제작했는데요. 크기가 꽤 길어서 뒷판을 덧대주었습니다.',
      },
      {
        no: 7,
        name: '강남콩역삼점',
        description:
          '정말 재미있는 문손잡이입니다. 콩을 주재료로 음식을 만드시기에, 콩을 활용한 디자인으로 문손잡이를 제작했던 사례입니다. 손님들도 오실때마다 재미있을것 같네요 ㅎㅎ',
      },
    ],
  },
  {
    id: 'business-product',
    name: '사업화 제품',
    thumbnailUrl: '/images/portfolio/business-product/thumbnail.png',
    products: [
      {
        no: 1,
        name: '테이블매트(비스틸대표님)',
        description:
          '아들을 다 키우고나서 이제 본인만의 것을 해보고 싶어 아크릴맛집을 찾아오신 비스틸 대표님! 디자인에 대해서 잘 모르지만 아이디어는 갖고 계셨습니다. 그래서 디자인 상담을 하고 수 많은 샘플링 끝에 탄생한 테이블 매트입니다. 한 번 만들고 나중에 연락이 올 줄 알았는데 금방 또 연락이 와서 다 팔려서 추가제작을 하신다고 하셨어요 ㅎㅎ테이블에 간식, 음식 등을 올려둘 수 있는 귀엽고 독특한 디자인을 가진 테이블매트입니다. 이제는 새로운 제품을 또 만들기 위해 다양한 테스트중입니다.',
      },
      {
        no: 2,
        name: '유즈얼유니크',
        description:
          '아크릴맛집과 협력업체인 유즈얼유니크입니다. 아크릴 가구, 소품 등을 주로 다루고 있는데요. 일상 속의 특별함을 찾는다는 슬로건과 함께 정말 특별한 제품들을 제작하고 있습니다. 디자이너 전공의 대표님이 디자인을 직접 하시기 때문에 더욱 특별한 것이 나오는 것 같습니다. 또한 아크릴과 조명을 활용한 제품은 정말 매력적입니다.',
      },
    ],
  },
  {
    id: 'signboard',
    name: '간판',
    thumbnailUrl: '/images/portfolio/signboard/thumbnail.png',
    products: [
      {
        no: 1,
        name: '나뚜루간판(팝업)',
        description:
          '아이스크림으로 유명한 나뚜루가 팝업스토어를 진행하였을 때 꽂아서 사용할 수 있는 아크릴 간판을 제작했던 기억이 있네요 ㅎㅎ',
      },
      {
        no: 2,
        name: '허벌라이프(A형간판)',
        description:
          '아크릴 절곡을 활용한 A형 간판입니다. 건강하면 유명한 기업인 허벌라이프가 팝업 관련 행사를 할 때 제작했던 메뉴판과 A형 아크릴 간판입니다.',
      },
      {
        no: 3,
        name: '미용실 박스간판',
        description:
          'nerd 미용실의 간판을 빨간색 아크릴박스간판으로 제작해서 시공했던 경험이 있습니다.',
      },
      {
        no: 4,
        name: '사인간판',
        description: '간단하게 프린팅을 해서 사용할 수 있는 사인간판입니다.',
      },
      {
        no: 5,
        name: '삼각도형조명간판',
        description:
          '을지로파티룸 아크릴서울스튜디오의 아크릴 간판을 삼각형태로 제작했습니다. 또한 내부에는 LED를 원통에 나선형으로 감아서 간판이 눈에 띄게 제작하고 시공까지 했습니다.',
      },
      {
        no: 6,
        name: '우기제과 아크릴간판',
        description:
          '을지로 우기제과의 아크릴간판입니다. 아크릴맛집의 디자이너가 직접 그림을 그리고 UV인쇄를 통해 프린트 후 원형으로 제작하여 가서 시공까지 했습니다.',
      },
      {
        no: 7,
        name: '아크릴박스간판(수류산방)',
        description:
          '종로 근처에 있는 책방인 수류산방에서 아크릴 간판이 필요하셔서 디자인과 함께 조명이 들어간 아크릴 박스간판을 제작했습니다.',
      },
    ],
  },
  {
    id: 'popup',
    name: '팝업스토어',
    thumbnailUrl: '/images/portfolio/popup/thumbnail.png',
    products: [
      {
        no: 1,
        name: '화장품거치대',
        description:
          '화장품과 아크릴은 정말 잘 어울립니다. 고급진 느낌을 낼 수 있기 때문이라고 할까요? 이번에는 어느 대표님이 화장품 전시회를 나가시는데 화장품을 전시할 거치대가 필요하다고 하셔서 제작했었습니다. 다행히도 만족을 해주셨고 주변에서 어디에서 했냐고 여쭤보시기까지 했다고 해주셔서 기분이 좋았습니다.',
      },
      {
        no: 2,
        name: '뮬보이팝업',
        description:
          '뮬보이라는 신발 브랜드에서 명동에 팝업스토어를 하는데 다양한 신발들을 이쁘게 보여주고 싶다고 하셔서 민트계열의 색상의 아크릴판을 활용해 전시를 위한 다양한 것들을 제작해서 팝업스토어를 꾸며드렸습니다 ㅎㅎ',
      },
      {
        no: 3,
        name: '유즈얼유니크팝업',
        description:
          '현대백화점에서 진행한 아크릴 소품 및 가구 전문 브랜드인 유즈얼유니크의 팝업스토어 또한 아크릴을 활용해서 다양한 것들을 보여주는 일이 있었습니다.',
      },
    ],
  },
  {
    id: 'furniture',
    name: '아크릴가구',
    thumbnailUrl: '/images/portfolio/furniture/thumbnail.png',
    products: [
      {
        no: 1,
        name: '유즈얼유니크가구들',
        description:
          '아크릴맛집과 협력업체인 유즈얼유니크에는 아크릴 가구, 아크릴 소품을 다루고 있어 다양한 가구 사례가 있습니다.',
      },
      {
        no: 2,
        name: '카페 테이블 20개',
        description:
          '아크릴 판과 프레임을 활용한 테이블 20개를 제작했습니다. 불광을 내어 표면을 고급지게 표현했으며, 프레임과 조립은 사장님이 직접하신다고 하셔서 배송을 하게 되었던 기억이 있네요.',
      },
      {
        no: 3,
        name: '사이드테이블(요가)',
        description:
          '아크릴 후염색을 통해 요가원의 사이드 테이블을 제작한 사례입니다.',
      },
      {
        no: 4,
        name: '아크릴의자',
        description:
          '저희 디자이너 직원분이 남는 아크릴 판과 프레임을 활용해서 제작한 의자입니다.',
      },
      {
        no: 5,
        name: '테이블상판',
        description:
          '이태원에 위치한 티핑포인트 카페에는 아크릴상판을 활용해서 인테리어의 분위기를 변화를 주었습니다. 또한 시간이 지나 다른 색상을 하고 싶다고 하셔서 현재는 다른 색상으로 테이블이 꾸며져 있습니다!',
      },

      {
        no: 6,
        name: '선반(아스텔)',
        description: '아크릴 판을 활용해서 3단 선반을 만들었습니다.',
      },
    ],
  },
  {
    id: 'art',
    name: '예술 및 졸업작품',
    thumbnailUrl: '/images/portfolio/art/thumbnail.png',
    products: [
      {
        no: 1,
        name: 'LED간판(졸작)',
        description:
          '미대 다니는 학생분이 아크릴과 LED를 활용해서 간판을 만들고 싶다고 하셔서 주말에 비가 오는데도 찾아오신 기억이 있습니다. 미대를 다니지만 그림을 주로 그리느라 일러스트 혹은 캐드를 사용하지 못하셔서 사무실에서 같이 2시간 정도 들여서 디자인을 같이 했던 기억이 있네요 ㅎㅎ',
      },
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

export function getCategories(): Category[] {
  return portfolioData;
}

export function getProducts(categoryId: string): Product[] {
  const category = getCategoryById(categoryId);
  return category ? category.products : [];
}
