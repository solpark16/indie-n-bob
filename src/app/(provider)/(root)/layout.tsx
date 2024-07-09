import Header from "@/components/Header";
import { PropsWithChildren } from "react";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="max-w-[1920px] min-h-screen mx-auto">
      <Header></Header>
      <div className="w-full max-w-[1280px] mx-auto">{children}</div>
    </div>
  );
}

export default RootLayout;
