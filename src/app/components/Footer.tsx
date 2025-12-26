// src/components/Footer.jsx
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaBlog } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">아크릴맛집</h3>
            <p>아크릴을 맛있게 만들어드립니다.</p>
            <p className="mt-4">
              <strong>사업자 정보:</strong>
              <br />
              사업자명: 아크릴맛집
              <br />
              사업자등록번호: 382-75-00268
              <br />
              주소: 서울특별시 중구 을지로33길 31,명신빌딩 101호
              <br />
              email: acryl.jmt@gmail.com
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end">
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
