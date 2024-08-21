'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaComments, FaPencilRuler, FaUserTie } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);
const MotionH2 = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.h2),
  { ssr: false }
);

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">아크릴맛집 소개</h1>
        <p className="text-xl text-gray-600">
          여러분들의 아이디어가 세상에 나오길 바랍니다.
        </p>
      </header>

      {/* 새로운 섹션 추가 */}
      <section className="mt-20 mb-20 text-center">
        <MotionH2
          className="text-5xl md:text-7xl font-bold text-brand"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          JUST MAKE IT
        </MotionH2>
        <MotionDiv
          className="h-1 bg-brand mx-auto mt-4"
          initial={{ width: 0 }}
          animate={{ width: '80%' }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </section>

      <section className="mb-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/images/about/team-photo.png"
              alt="아크릴맛집 팀사진"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">젊은 열정, 풍부한 경험</h2>
            <p className="text-lg mb-4">
              을지로 제조업계에 아크릴 제조에 대한 명맥을 이어나가는
              아크릴맛집입니다. 20-30대로 구성된 아크릴맛집은 젊은 감각과
              아크릴에 대한 깊은 이해를 바탕으로, 고객님께 최고의 제품을
              제공하고 있습니다.
            </p>
            <p className="text-lg">
              "세상에 외치고 싶습니다. 20-30대로 이루어진 아크릴 팀이 을지로
              제조업계의 그 명맥을 이어가고 있다는 것을!"
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          왜 아크릴맛집인가요?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaComments className="text-5xl text-brand mb-4" />
            <h3 className="text-xl font-bold mb-2">빠르고 편한 소통</h3>
            <p>
              카톡,전화, 문자등 다양한 방법으로 실시간 상담. 젊은 감각으로
              고객님의 니즈를 정확히 파악합니다.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaPencilRuler className="text-5xl text-brand mb-4" />
            <h3 className="text-xl font-bold mb-2">전문적인 디자인 조언</h3>
            <p>
              디자이너 출신 대표와 전문 디자이너가 제품의 용도와 아크릴 특성을
              고려한 최적의 디자인을 제안합니다.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaUserTie className="text-5xl text-brand mb-4" />
            <h3 className="text-xl font-bold mb-2">믿을 수 있는 실력</h3>
            <p>
              아크릴수저로써 아크릴 제조의 모든 과정을 완벽히 이해하고 있어,
              고품질 제품을 일관되게 제공합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">고객 후기</h2>
        <div className="bg-gray-100 p-8 rounded-lg">
          <blockquote className="text-lg italic mb-4">
            "저는 디자인을 하나도 모르고, 제품을 어떻게 만들어야 하는지
            몰랐는데, 아크릴맛집에서 디자인상담부터 제품제작까지 알려주셔서
            덕분에 제품을 만들어서 판매까지 하는 경험을 하게 되었습니다. 정말
            감사합니다."
          </blockquote>
          <p className="font-bold">- 비OO 대표님</p>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg">
          <blockquote className="text-lg italic mb-4">
            "사장님 아까 디자인 추천도 해주시고 빠르게 제작해주셔서 감사합니다!"
          </blockquote>
          <p className="font-bold">
            - 도면을 가져오라해서 속상한 어느 한 고객님
          </p>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg">
          <blockquote className="text-lg italic mb-4">
            "해외 화장품 전시회에서 아주 예쁘게 아크릴 잘 사용했습니다. 다들
            예쁘고 퀄리티 좋다고 어디서 했냐고 문의가 많았어요. 조만간 또
            문의드리겠습니다. 너무 만족하고 있어요 강추! 꼭 인사드리고 싶었어요.
            번창하세요!"
          </blockquote>
          <p className="font-bold">- 화장품 전시회를 나간 OOO 대표님</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          저희 둘만 아는 약속
        </h2>
        <p className="text-lg text-center">
          아크릴맛집은 항상 책임감을 가지고 고객님께 최선을 다하겠습니다. <br />
          여러분의 아이디어를 현실로 만들어내는 과정에 함께 하겠습니다.
        </p>
      </section>

      <section className="text-center mb-20">
        <Link href="/order" passHref>
          <MotionDiv
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-brand text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300">
              주문제작 하러가기
            </button>
          </MotionDiv>
        </Link>
      </section>
    </div>
  );
}
