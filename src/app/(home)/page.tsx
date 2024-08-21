import Link from 'next/link';
import '../styles/globals.css';
import { Metadata } from 'next';
import Image from 'next/image';
import ImageSlider from './slider';
import ReviewGallery from './review';

export const metadata: Metadata = {
  title: 'HOME',
};

const images = [
  '/images/home/slider/1.png',
  '/images/home/slider/2.png',
  '/images/home/slider/3.png',
  '/images/home/slider/4.png',
  '/images/home/slider/5.png',
  '/images/home/slider/6.png',
  '/images/home/slider/7.png',
  '/images/home/slider/8.png',
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero 섹션 */}
      <section className="relative py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              여러분들의 아이디어가 세상에 나오게 하는 일, 우리가 함께 합니다.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8">
              JUST MAKE IT - 아크릴 주문 제작의 시작과 끝.
            </p>
            <Link
              href="/order"
              className="inline-block bg-brand text-white px-6 py-3 rounded-full text-base md:text-lg"
            >
              지금 주문 제작하기
            </Link>
          </div>
          <div className="md:w-1/2 w-full">
            <ImageSlider />
          </div>
        </div>
      </section>

      {/* 주요 서비스/제품 하이라이트 섹션 */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-brand">우리의 서비스</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <Image
              src="/images/home/service/1.png"
              alt="아크릴 재단"
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">아크릴 재단</h3>
            <p className="text-gray-600 mb-4">
              정밀한 기계로 아크릴을 원하는 크기와 모양으로 재단합니다. 직선에
              유리합니다. 날을 이용합니다.
            </p>
          </div>
          <div>
            <Image
              src="/images/home/service/2.png"
              alt="CNC 가공"
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">CNC 가공</h3>
            <p className="text-gray-600 mb-4">
              복잡한 도면에 유리하며, 곡선과 깊이감을 표현하는데
              유리합니다.50T(mm)까지 가공이 가능합니다.
            </p>
          </div>
          <div>
            <Image
              src="/images/home/service/3.png"
              alt="아크릴 불빠우"
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">불빠우</h3>
            <p className="text-gray-600 mb-4">
              화염을 이용해 아크릴 표면을 고급지게 처리합니다. 투명도를 높이고
              고급스러운 마감을 제공합니다.
            </p>
          </div>
          <div>
            <Image
              src="/images/home/service/4.png"
              alt="다이아 컷팅"
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">다이아 컷팅</h3>
            <p className="text-gray-600 mb-4">
              고급진 절단면을 만들기 위해 사용하는 기기입니다.
            </p>
          </div>
          <div>
            <Image
              src="/images/home/service/5.png"
              alt="레이저 커팅"
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">레이저 커팅</h3>
            <p className="text-gray-600 mb-4">
              잘린 면이 반짝하는 것이 포인트이며, 복잡한 도면 또한 제작이
              가능합니다. 20T(mm)까지 가능
            </p>
          </div>
          <div>
            <Image
              src="/images/home/service/6.png"
              alt="아크릴 절곡"
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">아크릴 절곡</h3>
            <p className="text-gray-600 mb-4">
              열을 가해 아크릴을 원하는 각도로 구부립니다. 입체적인 디자인과
              구조물 제작에 필수적인 과정입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 포트폴리오 섹션 */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">아크릴 주문제작 사례</h2>
          <p className="text-gray-600 mb-8">
            다양한 주문 제작 사례를 보면서 여러분들의 아이디어에 도움이 되기를
            바랍니다.
          </p>
          {/* 이미지 갤러리 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/home/portfolio/1.png"
                alt="명동뮬보이 팝업스토어"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  명동뮬보이 팝업스토어
                </h3>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/home/portfolio/2.png"
                alt="한솔비 작가 개인전 테이블"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  한솔비 작가님 개인전 테이블
                </h3>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/home/portfolio/3.png"
                alt="국제 조경 박람회 아크릴거울"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  국제 조경 박람회 아크릴거울
                </h3>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="bg-brand text-white px-8 py-3 rounded-full text-lg hover:bg-opacity-90 transition duration-300"
            >
              포트폴리오 더보기
            </Link>
          </div>
        </div>
      </section>

      {/* 고객 후기 섹션 */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-6 text-brand">
          소중한 고객 후기!
        </h2>
        <ReviewGallery />
      </section>

      {/* 회사 스토리 섹션 */}
      <section className="bg-brand text-white py-16 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            우리는 어떻게 시작했을까요?
          </h2>
          <p className="mb-8">
            아크릴맛집은 'JUST MAKE IT'이라는 슬로건 아래, 고객의 아이디어를
            실현하는 데 최선을 다하고 있습니다. 블로그를 시작으로 한 분, 한 분
            좋은 퀄리티로 보답을 하다 보니, 운이 좋게도 매주 20건 이상의 작업을
            진행하고 있습니다.
          </p>
          <Link
            href="/about"
            className="bg-white text-brand px-8 py-3 rounded-full text-lg"
          >
            더 알아보기
          </Link>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">지금 시작하세요!</h2>
          <p className="text-xl mb-8">아이디어를 현실로, JUST MAKE IT.</p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/order"
              className="bg-brand text-white px-8 py-3 rounded-full text-lg"
            >
              지금 주문 제작하기
            </Link>
            <Link
              href="/contact"
              className="bg-white text-brand px-8 py-3 rounded-full text-lg"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
