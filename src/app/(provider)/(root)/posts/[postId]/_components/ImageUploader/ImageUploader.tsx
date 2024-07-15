"use client";

import Image from "next/image";
import {
  ChangeEvent,
  MouseEventHandler,
  MutableRefObject,
  PropsWithChildren,
  useCallback,
  useState,
} from "react";
import { upload } from "./upload";

type Props = {
  refInput: MutableRefObject<HTMLInputElement | null>;
  image?: string | null;
} & PropsWithChildren;

function ImageUploader({ children, image, refInput }: Props) {
  const [fileURL, setFileURL] = useState<string>(
    image?.startsWith("http") ? image : ""
  );

  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();
    refInput.current?.click();
  };

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.currentTarget.files;
    if (!files || files.length === 0) {
      return;
    }

    upload(files[0])
      .then(async (url) => setFileURL(url))
      .catch(() => alert("이미지 업로드 실패"));
  }, []);

  return (
    <div className="flex items-end gap-x-5">
      {fileURL && (
        <Image
          src={fileURL}
          alt="사용자 첨부 이미지"
          width="300"
          height="300"
          className="rounded-xl"
        />
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        ref={refInput}
        className="hidden"
      />
      <div onClick={handleClick}>{children}</div>
    </div>
  );
}

export default ImageUploader;
