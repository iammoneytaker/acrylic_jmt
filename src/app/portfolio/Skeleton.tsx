export function SkeletonCategoryCard() {
  return (
    <div className="bg-gray-100 p-6 rounded shadow">
      <div className="w-full h-40 bg-gray-200 animate-pulse mb-4 rounded"></div>
      <div className="w-1/2 h-6 bg-gray-200 animate-pulse rounded"></div>
    </div>
  );
}
export function SkeletonProductCard() {
  return (
    <div className="bg-white rounded shadow overflow-hidden">
      <div className="w-full h-64 bg-gray-200 animate-pulse"></div>
      <div className="p-4">
        <div className="w-1/2 h-6 bg-gray-200 animate-pulse mb-2 rounded"></div>
      </div>
    </div>
  );
}

export function SkeletonProductDetail() {
  return (
    <div>
      <div className="w-1/2 h-10 bg-gray-200 animate-pulse mb-8 rounded"></div>
      <div className="w-full h-96 bg-gray-200 animate-pulse mb-8 rounded"></div>
      <div className="w-full h-8 bg-gray-200 animate-pulse mb-4 rounded"></div>
      <div className="w-full h-8 bg-gray-200 animate-pulse mb-4 rounded"></div>
      <div className="w-2/3 h-8 bg-gray-200 animate-pulse mb-4 rounded"></div>
    </div>
  );
}
