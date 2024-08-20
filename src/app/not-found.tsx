'use client';
// src/app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">존재하지 않는 페이지입니다.</p>
      <Link href="/">
        <button className="bg-brand text-white px-6 py-3 rounded-md text-lg">
          홈으로 돌아가기
        </button>
      </Link>
    </div>
  );
}
