import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PropsWithChildren } from "react";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="max-w-[1920px] min-h-screen mx-auto">
      <Header />

      <div className="w-full max-w-[1280px] mx-auto md:px-12 sm:px-6">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
