"use client";

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import Swal from "sweetalert2";
import useUserData from "@/hooks/useUserData";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";

const ProfileEditModal = ({ onClose }: { onClose: () => void }) => {
  const supabase = createClient();
  const queryClient = useQueryClient();

  const { data: userData, error: userDataError } = useUserData();

  const [myNickname, setMyNickname] = useState(userData?.userData?.nickname);
  const [myEmail, setMyEmail] = useState(userData?.userData?.email);
  const [myProfileImage, setMyProfileImage] = useState(
    userData?.userData?.profile_image
  );
  const [myFavoriteArtist, setMyFavoriteArtist] = useState(
    userData?.userData?.favorite_artist
  );

  if (userDataError || !userData) {
    return (
      <div>유저 정보가 확인되지 않아 마이페이지를 불러올 수 없습니다.</div>
    );
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setMyProfileImage(event.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 변경사항이 없는데 완료 버튼을 클릭했는지 별하기 위한 변수
    let hasChanges = false;

    // 프로필 이미지 변경 로직
    if (myProfileImage !== userData?.userData?.profile_image) {
      hasChanges = true;
      if (myProfileImage) {
        const uploadProfileImage = async (file) => {
          const bucket = "users";

          const timestamp = Date.now();
          const fileName = `${timestamp}_${file.name}`;
          const { data, error } = await supabase.storage
            .from(bucket)
            .upload(`profile/${fileName}`, file);

          if (error) {
            console.error("버킷 이미지 업로드 실패", error);
            return;
          }

          console.log("버킷 이미지 업로드 성공", data);

          const publicUrl = supabase.storage
            .from(bucket)
            .getPublicUrl(`profile/${fileName}`).data.publicUrl;

          const { error: updateError } = await supabase
            .from("users")
            .update({ profile_image: publicUrl })
            .eq("user_id", userData?.userData?.user_id as string); // userData.userData.user_id로 수정

          if (updateError) {
            console.error("users 이블에 프사 url 업데이트 실패:", updateError);
            return;
          }

          console.log("유저 프사 변경 성공");
          setMyProfileImage(publicUrl);
        };

        const fileInput = document.querySelector(
          'input[type="file"]'
        ) as HTMLInputElement;
        const file = fileInput?.files?.[0];
        if (file) {
          await uploadProfileImage(file);
        } else {
          console.error("파일 선택된 것 없음");
          return;
        }
      } else {
        console.log("올릴 프로필 사진을 선택하지 않음");
      }
    }

    // 닉네임 변경 로직
    if (
      myNickname &&
      myNickname !== userData?.userData?.nickname &&
      myNickname.length >= 4
    ) {
      hasChanges = true;
      const { error: nicknameError } = await supabase
        .from("users")
        .update({ nickname: myNickname })
        .eq("user_id", userData?.userData?.user_id as string);

      if (nicknameError) {
        console.error("users 테이블에 닉네임 업데이트 실패", nicknameError);
        return;
      }

      console.log("닉네임 변경 완료");
    } else if (myNickname && myNickname.length < 4) {
      Swal.fire({
        icon: "error",
        title: "닉네임은 4글자 이상이어야 합니다.",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    // 선호하는 뮤지션 변경 로직
    let favoriteArtistArray: string[] = [];
    if (typeof myFavoriteArtist === "string") {
      favoriteArtistArray = myFavoriteArtist
        .split(",")
        .map((artist) => artist.trim());
    } else if (Array.isArray(myFavoriteArtist)) {
      favoriteArtistArray = myFavoriteArtist as string[];
    } else {
      console.error("Invalid type for myFavoriteArtist");
      return;
    }

    if (
      JSON.stringify(favoriteArtistArray) !==
      JSON.stringify(userData?.userData?.favorite_artist)
    ) {
      hasChanges = true;
      const { error: favoriteArtistError } = await supabase
        .from("users")
        .update({ favorite_artist: favoriteArtistArray })
        .eq("user_id", userData?.userData?.user_id as string);

      if (favoriteArtistError) {
        console.error(
          "users 테이블에 선하는 뮤지션 변경 실패",
          favoriteArtistError
        );
        return;
      }

      console.log("선호하는 뮤지션 변경 성공");
    }

    if (!hasChanges) {
      Swal.fire({
        icon: "info",
        title: "변경사항이 없습니다.",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "프로필 수정이 완료되었습니다.",
      showConfirmButton: false,
      timer: 1500,
    });

    onClose();
    queryClient.invalidateQueries({ queryKey: ["myInfo"] });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-xl w-full max-w-xl relative">
        {/* 상단 배경 */}
        <div className="absolute top-0 left-0 right-0 bg-main-color h-12 rounded-t-xl flex justify-end items-center p-4">
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* 헤더 */}
        <h1 className="text-2xl font-semibold mb-6 text-center text-main-color mt-12">프로필 수정</h1>

        {/* 프로필 이미지 */}
        <div className="flex justify-center mb-2">
          <div className="relative">
            <Image
              src={myProfileImage || ""}
              alt="Profile"
              width={52}
              height={52}
              className="w-52 h-52 rounded-full border border-gray-300"
            />
          </div>
        </div>
        <div className="flex justify-center mb-6">
          <label className="bg-gray-100 hover:bg-gray-200 w-44 px-4 py-1 mt-4 text-sm text-gray-700 rounded cursor-pointer text-center">
            이미지 변경
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        {/* 아이디 */}
        <div className="mb-4 px-16">
          <label className="block text-gray-700 mb-2">아이디</label>
          <input
            type="text"
            value={myEmail as string}
            readOnly
            className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* 닉네임 */}
        <div className="mb-6 px-16">
          <label className="block text-gray-700 mb-2">닉네임</label>
          <input
            type="text"
            value={myNickname as string}
            onChange={(e) => setMyNickname(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* 선호하는 뮤지션 */}
        <div className="mb-6 px-16">
          <label className="block text-gray-700 mb-2">선호하는 뮤지션</label>
          <input
            type="text"
            value={myFavoriteArtist as string}
            onChange={(e) => setMyFavoriteArtist(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* 버튼들 */}
        <div className="flex justify-center space-x-4 px-16">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
          >
            취소
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 px-4 py-2 bg-main-color text-white rounded hover:bg-main-color/80"
          >
            완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditModal;
