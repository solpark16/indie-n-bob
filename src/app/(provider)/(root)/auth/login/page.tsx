"use client";
import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineLockClosed } from "react-icons/hi2";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useAuthStore } from "@/zustand/auth.store";

export default function LoginPage() {
  const { email, password, setEmail, setPassword } = useAuthStore();
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      Swal.fire({
        icon: "warning",
        text: "빈칸을 입력해주세요",
        showConfirmButton: true,
      });
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email,
          password,
        }
      );

      if (response.data) {
        Swal.fire({
          icon: "success",
          title: `로그인`,
          text: "메인페이지로 이동합니다.",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          console.log("클릭");
          //router.replace("/");
          window.location.href = "/";
        });
        console.log("로그인 되었습니다.", response.statusText);
      } else {
        Swal.fire({
          icon: "error",
          title: `로그인 실패`,
          text: response.data.error,
          showConfirmButton: true,
        });
        console.log(response.data.error);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `로그인 실패`,
        text: "이메일과 비밀번호를 확인해주세요.",
        showConfirmButton: true,
      });
      console.log("로그인 실패 ", error);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center">
        <h1 className="text-center text-2xl font-bold text-main-color my-10">
          로그인
        </h1>
        <form
          onSubmit={onSubmit}
          className="flex flex-col justify-center text-left w-[500px] mx-auto"
        >
          <div className="relative">
            <label htmlFor="email">이메일</label>
            <Input
              type="email"
              value={email}
              id="email"
              placeholder="formflet@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <AiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/4" />
          </div>

          <div className="relative">
            <label htmlFor="password">비밀번호</label>
            <Input
              type="password"
              value={password}
              id="password"
              placeholder="영문, 숫자, 특수문자 포함 6~10자"
              onChange={(e) => setPassword(e.target.value)}
            />
            <HiOutlineLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/4" />
          </div>

          <div className="flex justify-between text-[#A4A4A4] text-sm mb-3">
            <p>아직 회원이 아니신가요?</p>
            <Link href="/auth/signup">
              <button type="button" className="text-main-color hover:underline">
                회원가입
              </button>
            </Link>
          </div>
          <button
            type="submit"
            className="bg-main-color text-white rounded-md p-3"
          >
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
