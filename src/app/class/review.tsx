'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, User, X } from 'lucide-react';

const reviews = [
  {
    text: '3주간의 아크릴 클래스가 끝났네요. 처음 시작할 때는 많은 기대와 약간의 불안함이 공존했지만, 이제는 많은 것을 배웠다는 뿌듯함과 함께 아쉬움도 남는것 같습니다. 제가 경험한 아크릴 클래스의 가장 큰 장점은 다양하고 흥미로운 아크릴의 종류와 가공기법등에 대해 배울 수 있었다는 점입니다. 특히, 대표님의 풍부한 경험과 노하우를 직접 들을 수 있었던 점이 큰 도움이 되었습니다. 실습 시간마다 하나씩 새로운 작품을 만드는 것도 큰 보람이었습니다. 아쉬운 점이 있다면 3주라는 수업기간이 짧게 느껴졌는데요. 클래스의 기간을 4주정도로 조금 더 연장하는 방법이 있을것 같습니다. 마지막으로, 이 클래스를 통해 얻은 경험과 배움 그리고 좋은 분들과의 만남은 그 무엇과도 바꿀 수 없는 소중한 자산입니다. 아크릴이라는 새로운 매체를 통해 표현의 즐거움을 느끼고, 색다른 창작의 세계를 경험할 수 있었습니다. 이 과정에서 만난 동료들과의 교류도 큰 힘이 되었고, 많은 영감을 얻을 수 있었습니다. 아크릴 클래스를 이끌어 주시고 도움을 주신 다른 직원분들도 고생많으셨습니다. 감사합니다',
    author: '수강생 A',
  },
  {
    text: '[좋은점] 1. 아크릴에 대한 관심도가 많이 올라갔습니다! 강의를 듣기 전에는 재질을 어떻게 가공하고 전시했는지 신경쓰지 않았었는데 강의를 듣고나서 길거리를 지날 때 간판이나 디스플레이된 오브제들을 눈여겨 보고 사진으로 남기게 됐어요 ㅋㅋㅋㅋ 어떤 아크릴 오브젝트가 재밌는 발상으로 만들어졌는지, 평범한 방식으로 제작되었는지 레벨이나 고민이 보이게 된 게 제일 큰 변화입니다! 2. 아크릴 색상에 대한 선호가 생겼습니다! 3회차의 수업 마다 새로운 아크릴 색상을 접했는데(첫날: 투명 아크릴, 두번째 날: 아스텔 아크릴, 세번째 날: 투명아크릴+색 아크릴) 각 색상이 어떤 환경에 있고, 어떤 환경이 조성되어야 더 매력 있을지 고민하게 됐고 그에 따른 취향도 생긴 것 같습니다. 3. 레벨이 올랐습니다! 강의로 함께한 시간이 그리 긴 시간은 아니었지만 아크릴이란 소재를 가지고 기획하는 데 있어서 강의를 듣기 전의 저와 강의를 들은 후의 저는 완전히 레벨이 달라졌습니다! 기획자의 입장에서 단순 정보를 아는 것 만으로도 꽤 큰 무기일테지만 직접 제작을 하면서 습득한 지식의 질의 차이, 그리고 할 수 있을 것 같다와 해봤다의 급의 차이는 굉장히 크다고 생각합니다. 수업을 통해 얻은 경험이 3회차로 얻을 수 있는 가장 밀도높은 경험이 된 것 같아서 굉장히 만족스럽습니다. [아쉬운점] 아쉬운점이 사실 없기는 한데 그래도 굳이굳이 만들어보자면 고급화된 아크릴 활용 사례를 찾는 게 쉽지 않은 것 같아요! 3회차에 기초가 되는 활용법을 배우는 게 맞는 것 같기는 한데 따로 검색해서 찾으면 어렵지 않게 찾을 수 있을 줄 알았던 재밌는 아크릴 제작 레퍼런스를 찾기가 쉽지는 않네요! ㅋㅋㅋㅋㅋ 그런데 앞서 말씀드린 것처럼 이런 요소들이 아쉬운 점이라기에는 적으면서도 제가 스스로 찾아가면 될 부분이라는 생각이 들었어요ㅋㅋㅋ [개선점] 사람마다 배움의 온도가 다르다고 생각하는데 저와는 딱 잘 맞는 온도였어요! 부담스럽지 않은 선에서 가장 많은 걸 얻어갔다고 생각합니다!',
    author: '수강생 B',
  },
  {
    text: '막연한 아크릴에 접근하기 어려울때 제조 업체를 만나 친절히 상담을 하기란 쉽지 않았습니다. 이렇게 좋은 기회에 클래스에 참여해 아크릴의 특성과 공정을 이해하고 제조사와 상담하는 방법까지 배우니 의미있는 시간이었습니다. 제품을 직접 만들어보면서 재단, 접착, 불광, 절곡까지 경험해볼 기회는 아마 없을거에요 일단 인싸재질 대표님이 엄청 재미있습니다. 대표님과 같이 참여하신 회원님들 인맥도 소중한 인연이 되리라 생각 됩니다. 건의 사항으로 이론 수업 중 여러 공정들의 영상 자료가 추가 된다면 더할나위 없을거라 생각됩니다. 조만간 또 만나요👍',
    author: '수강생 C',
  },
  {
    text: '아크릴에 대해서 무언가 주문하고 싶을때 어떤점을 어떻게 주문해야할지 막막했는데. 만들고 싶은 부분에 대한 지식이 생겨서 좋았습니다',
    author: '수강생 D',
  },
  {
    text: '3주간 고생 많으셨고 열심히 준비해주셔서 감사합니다. 후기는 클래스에서 직감적으로 느껴지는 부분들과 클래스가 본인에게 미친 영향 두가지로 드리고 싶습니다. 클래스 내용은 실제 제조를 위한 공정들과 필요한 부분들을 다뤄주시어 실질적인 도움이 많이 될 것이라 생각이 들었고 만족도가 높습니다. 실습을하며 생각보다 시간이 짧다고 느껴졌고, 실제 기간, 시간 자체도 짧고 늦다고 생각합니다!! 더 하고 싶어요..! 두번째로 저에게 미친 영향을 말씀드리자면, 과장을 조금 더하자면, 아크릴 클래스를 알게되어서 삶에 큰 변화가 생겼습니다. 바쁘고 정신없는 나날에 우연히 클래스를 알게되었습니다. 도망가고 싶던 현실에서 전혀 새로운 세상을 직면함으로써 현실을 다시 마주할 수 있는 용기가 생겼습니다. 전혀 새로운 공간에서, 전혀 새로운 사람들을 만나, 무지한 분야의 지식을 공부하게되니 세상은 역시나 넓고 개인사는 비교할 수 없을만큼 작다는 것을 다시 깨닫고 평온이 찾아왔습니다. 직면한 나에겐 크게보였던 일들도 한발자국 멀리서 볼 수 있게 해주었고, 위 같은 시선을 가질 수 있게해주셔서 감사합니다. 다시 정신없는 나날들이 시작되어 후기가 늦었습니다. 이런 나날들을 살아갈 수 있는 힘을 주셔서 감사합니다🙇‍♂️',
    author: '수강생 E',
  },
];

const ReviewCarousel = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ text: '', author: '' });

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const openModal = (review: any) => {
    setModalContent(review);
    setModalOpen(true);
  };

  return (
    <div className="relative">
      <div className="bg-gray-100 p-12 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <User size={40} className="text-gray-500 mr-4" />
          <div>
            <p className="font-bold">{reviews[currentReview].author}</p>
          </div>
        </div>
        <p className="text-lg mb-4">
          {reviews[currentReview].text.slice(0, 200)}...
        </p>
        <button
          onClick={() => openModal(reviews[currentReview])}
          className="text-brand font-semibold hover:underline"
        >
          자세히 보기
        </button>
      </div>
      <button
        onClick={prevReview}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextReview}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <ChevronRight size={24} />
      </button>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">
                {modalContent.author}의 후기
              </h3>
              <button onClick={() => setModalOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <p className="text-lg">{modalContent.text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewCarousel;
