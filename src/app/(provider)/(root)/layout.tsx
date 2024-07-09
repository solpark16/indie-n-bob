import Header from "@/components/Header";
import Carousel from "@/components/MainPage/Carousel";
import { PropsWithChildren } from "react";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="max-w-[1920px] min-h-screen">
      <Header></Header>
      <Carousel />
      <main className="w-full max-w-[1280px] mx-auto">{children}</main>
    </div>
  );
}

export default RootLayout;
