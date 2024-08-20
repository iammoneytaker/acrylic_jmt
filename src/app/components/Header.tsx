'use client';
// src/components/Header.jsx
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo-pc.png"
                alt="아크릴맛집 로고"
                width={60}
                height={20}
                className="hidden md:block"
              />
              <Image
                src="/images/logo-mo.png"
                alt="아크릴맛집 로고"
                width={40}
                height={20}
                className="md:hidden"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-brand">
              Home
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-brand">
              Portfolio
            </Link>
            <Link href="/order" className="text-gray-700 hover:text-brand">
              주문제작 하러가기
            </Link>
            <Link href="/class" className="text-gray-700 hover:text-brand">
              아클
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-brand">
              About
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-gray-700 hover:text-brand">
              Home
            </Link>
            <Link
              href="/portfolio"
              className="block text-gray-700 hover:text-brand"
            >
              Portfolio
            </Link>
            <Link
              href="/order"
              className="block text-gray-700 hover:text-brand"
            >
              Order
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-brand"
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-brand"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
