"use client";
import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineLockClosed } from "react-icons/hi2";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="w-[1280px] mx-auto flex flex-col justify-center">
        <h1 className="text-center text-2xl font-bold text-main-color my-10">
          로그인
        </h1>
        <form className="flex flex-col justify-center text-left w-[500px] mx-auto">
          <div className="relative">
            <label htmlFor="email">이메일</label>
            <Input type="email" id="email" placeholder="formflet@email.com" />
            <AiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/4" />
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

          <div className="flex justify-between text-[#A4A4A4] text-sm mb-3">
            <p>아직 회원이 아니신가요?</p>
            <Link href="/auth/signup">
              <button className="text-main-color hover:underline">
                회원가입
              </button>
            </Link>
          </div>
          <button className="bg-main-color text-white rounded-md p-3">
            로그인
          </button>
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
