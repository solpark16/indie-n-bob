import Header from "@/components/Header";
import Carousel from "@/components/MainPage/Carousel";
import { PropsWithChildren } from "react";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="max-w-[1920px] min-h-screen mx-auto">
      <Header></Header>
      <Carousel />
      <div className="w-full max-w-[1280px] mx-auto md:px-12 sm:px-6">
        {children}
      </div>
    </div>
  );
}

export default RootLayout;
