import Link from 'next/link';
import '../styles/globals.css';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'HOME',
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero 섹션 */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
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
            <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
              <div className="aspect-w-16 aspect-h-9">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                  poster="/images/home/hero-poster.jpg"
                >
                  <source
                    src="/videos/home/hero-video.mp4"
                    type="video/quicktime"
                  />
                  <source src="/videos/home/hero-video.mp4" type="video/mp4" />
                  죄송합니다. 비디오를 재생할 수 없습니다.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 서비스/제품 하이라이트 섹션 */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8">우리의 서비스</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/images/home/service2.png"
              alt="간판 제작"
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-2">간판 제작</h3>
            <p className="text-gray-600 mb-4">
              독창적인 간판으로 브랜드 가치를 높이세요.
            </p>
            <Link href="/signboard" className="text-brand">
              더 알아보기
            </Link>
          </div>
          <div>
            <Image
              src="/images/home/service3.png"
              alt="인테리어 소품"
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-2">인테리어 소품</h3>
            <p className="text-gray-600 mb-4">
              아크릴로 만드는 특별한 인테리어 아이템.
            </p>
            <Link href="/interior" className="text-brand">
              더 알아보기
            </Link>
          </div>
          <div>
            <Image
              src="/images/home/service4.png"
              alt="아크릴 굿즈"
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-2">아크릴 굿즈</h3>
            <p className="text-gray-600 mb-4">
              개성 넘치는 나만의 아크릴 굿즈를 제작하세요.
            </p>
            <Link href="/goods" className="text-brand">
              더 알아보기
            </Link>
          </div>
        </div>
      </section>

      {/* 포트폴리오 섹션 */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">우리가 만든 작품들</h2>
          <p className="text-gray-600 mb-8">
            다양한 주문 제작 사례를 통해 우리의 역량을 확인하세요.
          </p>
          {/* 이미지 갤러리 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Image
              src="/images/home/portfolio1.jpg"
              alt="포트폴리오 사례 1"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
            <Image
              src="/images/home/portfolio2.jpg"
              alt="포트폴리오 사례 2"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
            <Image
              src="/images/home/portfolio3.jpg"
              alt="포트폴리오 사례 3"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="text-center mt-8">
            <Link
              href="/portfolio"
              className="bg-brand text-white px-8 py-3 rounded-full text-lg"
            >
              포트폴리오 더보기
            </Link>
          </div>
        </div>
      </section>

      {/* 고객 후기 섹션 */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8">고객들이 우리를 선택한 이유</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <p className="text-gray-600 mb-4">
              "아크릴맛집 덕분에 제 아이디어가 현실이 되었습니다! 품질과 서비스
              모두 최고입니다."
            </p>
            <div className="flex items-center">
              <Image
                src="/images/home/customer1.jpg"
                alt="고객 1"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">김민수 님</p>
                <p className="text-gray-600">ABC 회사 대표</p>
              </div>
            </div>
          </div>
          {/* 추가 고객 후기 */}
        </div>
      </section>

      {/* 회사 스토리 섹션 */}
      <section className="bg-brand text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            우리는 어떻게 시작했을까요?
          </h2>
          <p className="mb-8">
            아크릴맛집은 'JUST MAKE IT'이라는 슬로건 아래, 고객의 아이디어를
            실현하는 데 최선을 다하고 있습니다. 우리의 여정은 작은 작업장에서
            시작되었으며, 지금은 수많은 고객의 꿈을 현실로 만드는 데 기여하고
            있습니다.
          </p>
          <Link
            href="/about"
            className="bg-white text-brand px-8 py-3 rounded-full text-lg"
          >
            더 알아보기
          </Link>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8">자주 묻는 질문</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold mb-2">
              Q. 주문 제작 과정은 어떻게 되나요?
            </h3>
            <p className="text-gray-600">
              주문 제작은 다음과 같은 과정으로 진행됩니다: 상담 → 디자인 → 제작
              → 납품
            </p>
          </div>
          {/* 추가 FAQ */}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="bg-brand text-white px-8 py-3 rounded-full text-lg"
          >
            문의하기
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
