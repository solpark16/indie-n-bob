import Image from "next/image";
import loadingGif from "../../public/loading-circle.gif";
import Backdrop from "./Backdrop";

function Loading() {
  return (
    <Backdrop>
      <Image
        src={loadingGif}
        width={loadingGif.width}
        height={loadingGif.height}
        alt="로딩 중..."
        className="relative bottom-20"
      />
    </Backdrop>
  );
}

export default Loading;
