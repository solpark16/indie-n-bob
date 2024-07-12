"use client";

import { Concert, ConcertInDB } from "@/types/Concert";
import { createClient } from "@/utils/supabase/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ConcertEditPage = ({ params }: { params: { postId: string } }) => {
  const { postId } = params;
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  // TODO 기본 이미지 들어가야합니다
  const [imageUrl, setImageUrl] = useState("/concert-default-image.png");
  const [region, setRegion] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [time, setTime] = useState("");
  const [age, setAge] = useState("");
  const [price, setPrice] = useState("");
  const [link, setLink] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState(null);

  const { data: targetData, isPending } = useQuery({
    queryKey: ["concert"],
    queryFn: async () => {
      const supabase = createClient();
      const { data: post, error } = await supabase
        .from("concert_posts")
        .select()
        .eq("post_id", postId)
        .single();

      if (post?.title) setTitle(post.title);
      if (post?.image) setImageUrl(post.image);
      if (post?.region) setRegion(post.region);
      if (post?.start_date) setStartDate(post.start_date);
      if (post?.end_date) setEndDate(post.end_date);
      if (post?.time) setTime(post.time);
      if (post?.age) setAge(post.age);
      if (post?.price) setPrice(post.price);
      if (post?.link) setLink(post.link);
      if (post?.content) setContent(post.content);

      return post;
    },
  });
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const fileObj = e.target.files[0];
      const supabase = createClient();
      const { data, error } = await supabase.storage
        .from("posts/concert")
        .upload(`post_${Date.now()}.png`, fileObj);
      if (data) {
        setImageUrl(
          `https://stfauxrjudaltlmspsnv.supabase.co/storage/v1/object/public/posts/concert/${data.path}`
        );
      }
    }
  };
  const queryClient = useQueryClient();

  const updatePostMutation = useMutation({
    mutationFn: async (updateConcert: any) => {
      const supabase = createClient();
      await supabase
        .from("concert_posts")
        .update(updateConcert)
        .eq("post_id", postId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["concerts"],
      });
      router.push(`/concerts/${postId}`);
    },
  });

  const concertAddHandler = async () => {
    if (
      !title.trim() ||
      !region.trim() ||
      !startDate.trim() ||
      !endDate.trim() ||
      !time ||
      !age.trim() ||
      !price.trim() ||
      !content.trim()
    ) {
      alert("관련 링크를 제외한 입력 칸을 모두 채워주세요.");
      return;
    }
    if (imageUrl === "/concert-default-image.png") {
      alert("공연에 관련된 이미지를 등록해주세요.");
      return;
    }
    updatePostMutation.mutate({
      ...targetData,
      title,
      image: imageUrl,
      region,
      start_date: startDate,
      end_date: endDate,
      time,
      age,
      price,
      link,
      content,
    });
  };

  return (
    <div>
      <input
        className="border-b-[1px] border-[#DDDDDD] text-[30px] w-full py-[25px]"
        placeholder="공연명을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* TODO 이미지 첨부하기 */}
      <div className="mt-[49px] mb-[65px] flex gap-[32px]">
        <Image src={imageUrl} alt="concert-image" width={276} height={276} />
        <div className="mt-auto">
          <input
            id="image-file"
            className="hidden"
            type="file"
            onChange={handleImageUpload}
          />
          <label
            htmlFor="image-file"
            className="cursor-pointer bg-main-color w-[257px] h-[61px] flex justify-center items-center rounded-[10px] text-white text-[20px]"
          >
            이미지 첨부하기
          </label>
        </div>
      </div>
      <div className="text-[20px]">
        <div className=" border-b-[1px] border-[#DDDDDD] flex items-center">
          <label className="w-[118px] ">공연장소</label>
          <input
            className="h-[60px] w-full"
            value={region}
            onChange={(e) => {
              setRegion(e.target.value);
            }}
          />
        </div>

        <div className=" border-b-[1px] border-[#DDDDDD] flex items-center">
          <label className="w-[118px]">공연기간</label>
          <input
            className="h-[60px]"
            type="date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          />{" "}
          ~{" "}
          <input
            className="h-[60px]"
            type="date"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
          />
        </div>
        <div className=" border-b-[1px] border-[#DDDDDD] flex items-center">
          <label className="w-[118px]">공연시간</label>
          <input
            className="h-[60px] w-full"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </div>
        <div className=" border-b-[1px] border-[#DDDDDD] flex items-center">
          <label className="w-[118px]">관람연령</label>
          <input
            className="h-[60px] w-full"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className=" border-b-[1px] border-[#DDDDDD] flex items-center">
          <label className="w-[118px]">가격</label>
          <input
            className="h-[60px] w-full"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className=" border-b-[1px] border-[#DDDDDD] flex items-center">
          <label className="w-[118px]">관련링크</label>
          <input
            className="h-[60px] w-full"
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
        </div>
      </div>
      <textarea
        className="bg-[#F4F4F4] rounded-[15px] p-[30px] w-full h-[465px] resize-none mt-[55px]"
        placeholder="공연에 관한 정보를 입력해주세요."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="flex justify-end gap-[14px] mt-[39px] mb-[100px]">
        <button
          className="w-[145px] h-[61px] rounded-[10px] bg-[#E3E3E3]  text-[25px]"
          onClick={() => {
            router.push(`/concerts/${postId}`);
          }}
        >
          취소하기
        </button>
        <button
          className="w-[145px] h-[61px] rounded-[10px] bg-main-color  text-white text-[25px]"
          onClick={concertAddHandler}
        >
          등록하기
        </button>
      </div>
    </div>
  );
};

export default ConcertEditPage;
