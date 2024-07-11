"use client";

import BreakLine from "@/components/BreakLine";
import Loading from "@/components/Loading";
import SITE_URL from "@/constant";
import { Post } from "@/types/Post";
import { getUser } from "@/utils/getUser";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useEffect,
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
      const { data: post } = await response.json();
      setPost(post);

      const { title, content, hashtag = { tags: [] } } = post;
      setTitle(title);
      setContent(content);
      setTagArray(hashtag.tags as string[]);
    },
  });

  const route = useRouter();
  useEffect(() => {
    if (!post) return;

    (async () => {
      const user = await getUser();
      const isOtherPost: boolean = user ? user.id !== post.author_id : false;
      if (isOtherPost) {
        alert("다른 사람의 글은 수정할 수 없습니다.");
        route.replace(`/posts/${id}`);
        return;
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

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

    const refImageSrc = refInputFile.current?.value;
    const imageSrc = (refImageSrc?.startsWith("http") && refImageSrc) || post.image;

    const newPost: Post<false> = {
      title,
      content,
      image: imageSrc,
      authorId: post.author_id || "",
      nickname: post.author_nickname || "",
      hashtags: tagArray,
    };

    fetch(`${SITE_URL}/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(newPost),
    })
      .then(async (response) => {
        const { error } = await response.json();
        if (error) {
          console.error(error);
          return;
        }
        route.push("/posts");
      })
      .catch((e) => {
        alert("새로고침 후 재시도 해주세요");
        console.error(e);
      });
  };

  // TODO 이미지 업로드 완료 등록 버튼 disabled 처리 필요요

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
