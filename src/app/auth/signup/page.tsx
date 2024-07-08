"use client";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMusicalNote } from "react-icons/hi2";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { HiOutlineStar } from "react-icons/hi2";
import styled from "styled-components";

export default function SignUpPage() {
  return (
    <>
      <div className="w-[1280px] mx-auto flex flex-col justify-center">
        <h1 className="text-center text-2xl font-bold text-main-color my-10">
          회원가입
        </h1>
        <form className="flex flex-col justify-center text-left w-[500px] mx-auto">
          <div className="relative">
            <label htmlFor="email">이메일</label>
            <Input type="email" id="email" placeholder="formflet@email.com" />
            <AiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/4" />
          </div>

          <div className="relative">
            <label htmlFor="nickname">닉네임</label>
            <Input
              type="text"
              id="nickname"
              placeholder="영문, 숫자 포함 4~10자"
            />
            <HiOutlineMusicalNote className="absolute left-3 top-1/2 transform -translate-y-1/4" />
          </div>

          <div className="relative">
            <label htmlFor="password">비밀번호</label>
            <Input
              type="password"
              id="password"
              placeholder="영문, 숫자, 특수문자 포함 6~10자"
            />
            <HiOutlineLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/4" />
          </div>

          <div className="relative">
            <label htmlFor="favoriteArtist">선호하는 아티스트</label>
            <Input
              type="text"
              id="favoriteArtist"
              placeholder="실리카겔, 잔나비, 유다빈밴드, 데이브레이크"
            />
            <HiOutlineStar className="absolute left-3 top-1/2 transform -translate-y-1/4" />
          </div>

          <div className="flex flex-col gap-3 mt-5">
            <button className="bg-main-color text-white rounded-md p-3">
              회원가입
            </button>
            <Link href="/auth/login" className="block">
              <button className="w-[100%] border-2 border-main-color rounded-md text-main-color p-3 transition-all duration-300 ease-in-out hover:bg-main-color hover:text-white">
                로그인
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

const Input = styled.input`
  background: #efefef;
  border-radius: 5px;
  padding: 10px 10px 10px 35px;
  width: 100%;
  font-size: 15px;
  margin: 5px 0 20px 0;
`;
