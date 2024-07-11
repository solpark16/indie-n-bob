"use client";

import BreakLine from "@/components/BreakLine";
import Loading from "@/components/Loading";
import SITE_URL from "@/constant";
import { Post } from "@/types/Post";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useRef,
  useState,
} from "react";
import ImageUploader from "./ImageUploader/ImageUploader";
import TagInput from "./TagInput";

type Props = {
  id: number;
};

function PostEditSection({ id }: Props) {
  const refInputFile = useRef<HTMLInputElement | null>(null);
  const [post, setPost] = useState<Post>();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tagArray, setTagArray] = useState<string[]>([]);

  const handleOnChangeTitle: ChangeEventHandler<HTMLTextAreaElement> =
    useCallback((e) => setTitle(e.target.value), []);
  const handleOnChangeContent: ChangeEventHandler<HTMLTextAreaElement> =
    useCallback((e) => setContent(e.target.value), []);
  const addTag = useCallback((text: string) => {
    setTagArray((tags) => [...tags, text]);
  }, []);
  const removeTag = useCallback((text: string) => {
    setTagArray((tags) => tags.filter((tag) => tag !== text));
  }, []);

  const { isLoading, isSuccess } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const response = await fetch(`${SITE_URL}/api/posts/${id}`);
      const post = await response.json();
      setPost(post);

      const { title, content, hashtag = { tags: [] } } = post;
      setTitle(title);
      setContent(content);
      setTagArray(hashtag.tags as string[]);
    },
  });

  // TODO 본인 외에 다른 사람이 수정하러 들어오면 튕겨내기

  const route = useRouter();
  if (isLoading) {
    return <Loading />;
  } else if (isSuccess && !post) {
    alert("데이터를 불러오지 못했습니다.");
    route.push("/");
    return;
  }

  const handleOnsubmit: FormEventHandler = (e) => {
    if (!post) {
      return;
    }
    const newPost: Post<false> = {
      title,
      content,
      image: refInputFile.current?.value || post.image,
      nickname: post.author_nickname,
      hashtags: tagArray,
    };

    fetch(`${SITE_URL}/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(newPost),
    })
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
        // route.push("/posts");
      })
      .catch((e) => {
        alert("새로고침 후 재시도 해주세요");
        console.error(e);
      });
  };

  return (
    <section>
      <textarea
        className="w-full h-auto py-6 outline-none text-3xl font-bold resize-none"
        value={title}
        onChange={handleOnChangeTitle}
      ></textarea>
      <BreakLine />
      <div className="py-10">
        <ImageUploader refInput={refInputFile} image={post?.image}>
          <button className="px-10 py-2 rounded-lg bg-indiePrimary text-white">
            이미지 변경하기
          </button>
        </ImageUploader>
        <div className="pt-10 flex items-center">
          <span className="pr-8 font-semibold">해시태그</span>
          <span className="flex gap-x-3">
            {tagArray.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-2xl cursor-pointer bg-gray-200 text-gray-700 hover:bg-indiePrimary hover:text-white"
                onClick={() => removeTag(tag)}
              >
                #{tag}
              </span>
            ))}
          </span>
        </div>
        <div className="relative left-20 pl-2 py-3 mb-7 rounded">
          <TagInput handleAddTag={addTag} />
        </div>
        <textarea
          autoFocus
          className="w-full h-fit min-h-64 px-8 py-6 my-3 rounded-lg bg-slate-100 outline-none resize-none"
          value={content}
          onChange={handleOnChangeContent}
        ></textarea>
        <div className="flex justify-end gap-x-3">
          <button
            onClick={route.back}
            className="px-4 py-2 rounded bg-gray-200  hover:brightness-125"
          >
            취소하기
          </button>
          <button
            onClick={handleOnsubmit}
            className="px-4 py-2 rounded bg-indiePrimary text-white hover:brightness-125"
          >
            등록하기
          </button>
        </div>
      </div>
      <BreakLine />
    </section>
  );
}

export default PostEditSection;
