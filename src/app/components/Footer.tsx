// src/components/Footer.jsx
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaBlog } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">아크릴맛집</h3>
            <p>아크릴을 맛있게 만들어드립니다.</p>
            <p className="mt-4">
              <strong>사업자 정보:</strong>
              <br />
              사업자명: 아크릴맛집
              <br />
              사업자등록번호: 382-75-00268
              <br />
              주소: 서울특별시 중구 을지로33길 33, 청자빌딩 201호
              <br />
              email: official.uone@gmail.com
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/" className="hover:text-brand">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-brand">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/order" className="hover:text-brand">
                  주문제작 하러가기
                </Link>
              </li>
              <li>
                <Link href="/class" className="hover:text-brand">
                  아클
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.instagram.com/acryl_jmt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@%EC%95%84%ED%81%AC%EB%A6%B4%EB%A7%9B%EC%A7%91"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand"
                >
                  <FaYoutube className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://blog.naver.com/official_uone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand"
                >
                  <FaBlog className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
          &copy; 2024 아크릴맛집. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
