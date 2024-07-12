import ConcertListView from "@/components/ConcertList/ConcertListView";
import React from "react";

const ConcertListPage = () => {
  return (
    <div className="text-center mt-[140px] mb-38">
      <h2 className="text-[40px] text-[#10AF86] font-bold mb-[40px]">
        공연 정보
      </h2>
      <ConcertListView />
    </div>
  );
};

export default ConcertListPage;
