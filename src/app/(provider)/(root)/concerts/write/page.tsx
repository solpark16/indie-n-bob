import React from "react";

const ConcertWritePage = () => {
  return (
    <div>
      <input
        className="border-b-[1px] border-[#DDDDDD]"
        placeholder="공연명을 입력하세요"
      />
      {/* TODO 이미지 첨부하기 */}
      <div className="border-b-[1px] border-[#DDDDDD]">
        <label>공연장소</label>
        <input />
      </div>
      <div>
        <label>공연기간</label>
        <input />
      </div>
      <div>
        <label>공연시간</label>
        <input type="date" />~<input type="date" />
      </div>
      <div>
        <label>관람연령</label>
        <input />
      </div>
      <div>
        <label>가격</label>
        <input />
      </div>
      <div>
        <label>관련링크</label>
        <input />
      </div>
      <textarea placeholder="공연에 관한 정보를 입력해주세요." />
      <div>
        <button>취소하기</button>
        <button>등록하기</button>
      </div>
    </div>
  );
};

export default ConcertWritePage;
