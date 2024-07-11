import React from "react";

import PerformanceInfo from "./PerformanceInfo";
import Carousel from "./Carousel";
import BestInfo from "./BestInfo";

const MainPage = () => {
  return (
    <div>
      <div className=" absolute left-0">
        <Carousel />
      </div>
      <div className="w-full h-[500px]"></div>
      <PerformanceInfo />
      <BestInfo />
    </div>
  );
};

export default MainPage;
