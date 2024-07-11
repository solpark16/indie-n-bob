"use client";
import { AlertUi } from "@/components/Alert";
import Carousel from "@/components/Mainpage/Carousel";
import MainPage from "@/components/Mainpage/MainPage";
import { useAlertStore } from "@/zustand/alert.store";

export default function HomePage() {
  const { setAlert } = useAlertStore();
  const buttonClick = () => {
    setAlert(true, `반갑습니다!👋`, "테스트");
  };
  return (
    <div>
      <button onClick={buttonClick}>클릭</button>
      <AlertUi />
      <Carousel />
      <MainPage />
    </div>
  );
}
