'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ClassImage {
  src: string;
  alt: string;
}

const classImages: ClassImage[] = [
  { src: '/images/home/review/1.png', alt: '아크릴맛집 고객 후기 1' },
  { src: '/images/home/review/2.png', alt: '아크릴맛집 고객 후기 2' },
  { src: '/images/home/review/3.png', alt: '아크릴맛집 고객 후기 3' },
  { src: '/images/home/review/4.png', alt: '아크릴맛집 고객 후기 4' },
  { src: '/images/home/review/5.png', alt: '아크릴맛집 고객 후기 5' },
  { src: '/images/home/review/6.png', alt: '아크릴맛집 고객 후기 6' },
  { src: '/images/home/review/7.png', alt: '아크릴맛집 고객 후기 7' },
  { src: '/images/home/review/8.JPG', alt: '아크릴맛집 고객 후기 8' },
  { src: '/images/home/review/9.jpeg', alt: '아크릴맛집 고객 후기 9' },
  { src: '/images/home/review/10.png', alt: '아크릴맛집 고객 후기 10' },
  { src: '/images/home/review/11.png', alt: '아크릴맛집 고객 후기 11' },
  // 추가 이미지들...
];

const IMAGES_PER_PAGE = 6;

const ReviewGallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [imageLoadError, setImageLoadError] = useState<boolean[]>(
    new Array(classImages.length).fill(false)
  );

  const pageCount = Math.ceil(classImages.length / IMAGES_PER_PAGE);

  const openLightbox = (index: number) => {
    setCurrentImage(index + currentPage * IMAGES_PER_PAGE);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % classImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + classImages.length) % classImages.length
    );
  };

  const handleImageError = (index: number) => {
    setImageLoadError((prev) => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  };

  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const currentImages = classImages.slice(
    currentPage * IMAGES_PER_PAGE,
    (currentPage + 1) * IMAGES_PER_PAGE
  );

  return (
    <div className="mb-16">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {currentImages.map((img, index) => (
          <div
            key={index}
            className="relative aspect-w-16 aspect-h-9 cursor-pointer bg-gray-200 rounded-lg overflow-hidden"
            style={{ minHeight: '200px' }}
            onClick={() => openLightbox(index)}
          >
            {!imageLoadError[index + currentPage * IMAGES_PER_PAGE] ? (
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
                onError={() =>
                  handleImageError(index + currentPage * IMAGES_PER_PAGE)
                }
              />
            ) : null}
            <div
              className={`absolute inset-0 flex items-center justify-center text-white text-bold text-center p-2 ${
                imageLoadError[index + currentPage * IMAGES_PER_PAGE]
                  ? 'bg-gray-200'
                  : 'bg-black bg-opacity-40'
              }`}
            >
              {img.alt}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        {Array.from({ length: pageCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => changePage(index)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === index ? 'bg-brand text-white' : 'bg-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Lightbox (기존 코드와 동일) */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X size={24} />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-gray-300"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="relative w-full h-full max-w-4xl max-h-[80vh] flex items-center justify-center">
            {!imageLoadError[currentImage] ? (
              <Image
                src={classImages[currentImage].src}
                alt={classImages[currentImage].alt}
                fill
                sizes="100vw"
                className="object-contain"
                onError={() => handleImageError(currentImage)}
              />
            ) : null}
          </div>
          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewGallery;
