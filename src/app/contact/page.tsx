'use client';

export default function ContactPage() {
  const subject = encodeURIComponent('아크릴맛집과 협업을 원합니다');
  const body = encodeURIComponent(
    '안녕하세요,\n\n협업하고 싶은 내용과 간단한 소개 해주시면 감사하겠습니다.\n\n감사합니다.'
  );

  const mailtoUrl = `mailto:acryl.jmt@gmail.com?subject=${subject}&body=${body}`;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">협업 문의하기</h1>
      {/* 버튼 대신 <a> 태그를 버튼 스타일로 꾸며서 사용하세요 */}
      <a
        href={mailtoUrl}
        className="inline-block bg-brand text-white px-8 py-3 rounded-full text-lg hover:bg-opacity-90 transition duration-300"
      >
        이메일 보내기
      </a>
    </div>
  );
}
