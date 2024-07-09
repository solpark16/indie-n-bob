import { PropsWithChildren } from "react";

function Postlayout({ children }: PropsWithChildren) {
  return <div className="max-w-[700px] mx-auto">{children}</div>;
}

export default Postlayout;
