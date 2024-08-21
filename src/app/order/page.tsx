import Link from 'next/link';
import { Metadata } from 'next';
import { faqData } from './faq';
import {
  FaFileInvoice,
  FaComments,
  FaHandshake,
  FaTools,
  FaTruck,
} from 'react-icons/fa';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

export const metadata: Metadata = {
  title: '주문제작',
  description:
    '아크릴맛집의 주문제작 과정을 단계별로 안내해드립니다. 견적문의부터 발송까지 확인해보세요.',
};

export default function OrderPage() {
  const processes = [
    { icon: FaFileInvoice, title: '견적문의', description: '네이버 폼 제출' },
    {
      icon: FaComments,
      title: '상담',
      description: '디자인, 도면 (손그림 가능)',
    },
    {
      icon: FaHandshake,
      title: '공장 견학 및 면담',
      description: '(선택 사항)',
    },
    { icon: FaTools, title: '제작', description: '입금완료 후 진행' },
    {
      icon: FaTruck,
      title: '발송',
      description: '실측 및 설치 필요시 상담과정에서 결정',
    },
  ];
  return (
    <main className="container mx-auto py-12 px-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
        주문제작 하러가기
      </h1>
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">주문제작 과정</h2>
        <ol className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-8">
          {processes.map((process, index) => (
            <li
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-md flex flex-col items-center h-full"
            >
              <process.icon className="text-4xl text-brand mb-4" />
              <h3 className="text-xl font-bold mb-2">{process.title}</h3>
              <p className="text-center text-gray-600 flex-grow">
                {process.description}
              </p>
              {index < processes.length - 1 && (
                <>
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
                    <IoIosArrowForward className="text-4xl text-brand" />
                  </div>
                  <div className="lg:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <IoIosArrowDown className="text-4xl text-brand" />
                  </div>
                </>
              )}
            </li>
          ))}
        </ol>
      </section>
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-brand">
          자주 묻는 질문(필독)
        </h2>
        <ul className="space-y-4">
          {faqData.map((faq, index) => (
            <li key={index}>
              <details className="bg-gray-100 p-4 rounded">
                <summary className="font-bold">{faq.question}</summary>
                <p className="mt-2">{faq.answer}</p>
              </details>
            </li>
          ))}
        </ul>
      </section>
      <div className="text-center">
        <Link
          href="https://naver.me/GzgVgKw3"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand text-white px-8 py-3 rounded-full text-lg"
        >
          주문제작 하러가기
        </Link>
      </div>
    </main>
  );
}
