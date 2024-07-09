import { PropsWithChildren } from "react";

function Backdrop({ children }: PropsWithChildren) {
  return (
    <section className="w-full h-full min-w-screen min-h-screen absoulte top-0 lef-0 flex justify-center">
      <div className="w-full h-full fixed top-0 left-0 bg-black opacity-40"></div>
      <div className="py-[30%]">{children}</div>
    </section>
  );
}

export default Backdrop;
