"use client";

import useUserData from "@/hooks/useUserData";
import ProfileEditButton from "./ProfileEditButton";
import Loading from "@/components/Loading";
import Image from "next/image";

export default function MyProfile() {
  const { data: userData, isPending, isError } = useUserData();

  if (isPending) return <Loading />;
  if (!userData) {
    return <div>유저 데이터를 불러올 수 없습니다.</div>;
  }
  if (isError) return <div>에러가 발생했습니다.</div>;

  const { profile_image, nickname, favorite_artist } = userData.userData || {};

  return (
    <div className="flex items-center space-x-4 w-full">
      <Image
        src={profile_image || ""}
        alt="Profile"
        width={200}
        height={200}
        className="rounded-full h-[200px] object-cover"
      />
      <div className="flex-1 flex items-center justify-between w-full">
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <span className="text-4xl font-bold">{nickname}</span>
            <ProfileEditButton />
          </div>
          <hr className="border-gray-300 w-full mt-4" />
          <div className="mt-2">
            <p className="flex items-center">
              <Image
                src="/favorite_artist_icon.svg"
                alt="Favorite Artist Icon"
                width={20}
                height={20}
                className="inline-block w-4 h-4 mr-2 animate-pulse"
              />
              선호하는 뮤지션
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {Array.isArray(favorite_artist) &&
                favorite_artist.map((artist: string, index: number) => (
                  <span key={index} className="text-sm text-main-color">
                    #{artist}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
