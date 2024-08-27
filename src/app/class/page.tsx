import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ReviewCarousel from './review';
import ClassGallery from './gallery';

export const metadata: Metadata = {
  title: '아클(아크릴 클래스)',
  description:
    '아크릴 클래스, 아크릴맛집 대표가 직접 진행하는 아크릴 제조에 대한 강의, 3주의 시간이 지난 뒤 여러분들이 아크릴을 몰라서 손해보는 일은 없을겁니다.',
  keywords:
    '아크릴클래스,아크릴강의,아크릴교육,아크릴수업,아크릴배우기,아크릴전문가,아크릴기술, 아크릴제조강의',
};

export default function ACLClassPage() {
  return (
    <div className="bg-white">
      <header className="bg-brand text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          아클(아크릴 클래스)
        </h1>
        <p className="text-xl md:text-2xl px-4">
          3주간의 일정 후, 인생에서 아크릴을 몰라서 손해보는 일은 없을겁니다.
        </p>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">아클이란?</h2>
          <p className="text-lg mb-4 text-justify">
            '아클'은 주말을 이용하여 직접 공장에서 실습을 하면서 재단부터 가공,
            커팅, 절곡 등에 대한 기본기를 쌓아가는 클래스입니다. 3주간의 일정을
            소화한 뒤, 여러분들은 인생에서 아크릴을 몰라서 손해보는 일은 없게 될
            것입니다.
          </p>
          <Image
            src="/images/class/intro.png"
            alt="아클 클래스 소개"
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">얻을 수 있는 것</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>아크릴 사업체 대표가 직접 지도하는 '아크릴에 대한 기본기'</li>
            <li>아크릴이라는 소재의 특성에 대한 이해도 상승</li>
            <li>디자이너의 관점에서 바라보는 아크릴 제품들의 도면그리기</li>
            <li>제조업체와 상대할 때 손해보지 않는 방법</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">커리큘럼</h2>
          <p className="text-lg mb-4">
            실습 후 제작된 제품은 직접 가져가실 수 있습니다.
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>1주차: 재단 및 본딩, 빠우에 대한 이해 및 실습</li>
            <li>2주차: 인쇄 및 레이저 커팅 및 각인 이해 및 실습</li>
            <li>3주차: CNC 가공 및 절곡에 대한 이해 및 실습</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">수업 일정(3기)</h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-lg mb-2">
              <strong>시작일:</strong> 2024년 9월 21일(토요일)
            </p>
            <p className="text-lg mb-2">
              <strong>시간:</strong> 토요일 오후 3시 (약 5시간, 3주 총 15시간),
              일요일 오전 10시
            </p>
            <p className="text-lg">
              <strong>장소:</strong> 을지로아크릴서울스튜디오
              <br />
              (을지로 4가역 도보 1분)
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">수강료</h2>
          <p className="text-lg mb-4">
            <strong>3주 과정:</strong> 499,000원 (재료비 포함)
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">클래스 현장 스냅</h2>
          <ClassGallery />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">수강생 후기</h2>
          <ReviewCarousel />
        </section>

        <section className="text-center">
          <Link
            href="https://naver.me/xk1qABBG"
            className="bg-brand text-white text-xl font-bold py-4 px-8 rounded-full inline-block hover:bg-opacity-90 transition duration-300"
          >
            수강 신청하기
          </Link>
        </section>
      </main>
    </div>
  );
}
