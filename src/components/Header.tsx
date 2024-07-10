"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

interface User {
  email: string;
  nickname: string;
}

const Header: FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  const fetchUser = async () => {
    try {
      const { data: sessionData, error: sessionError } =
        await supabase.auth.getSession();
      if (sessionError) {
        console.error("Error getting session:", sessionError);
        setUser(null);
      } else {
        console.log("Session Data:", sessionData);
        if (sessionData.session?.user) {
          const { data: profileData, error: profileError } = await supabase
            .from("users")
            .select("nickname")
            .eq("user_id", sessionData.session.user.id)
            .single();
          if (profileError) {
            console.error("Error getting profile:", profileError);
            setUser(null);
          } else {
            console.log("Profile Data:", profileData);
            setUser({
              email: sessionData.session.user.email,
              nickname: profileData.nickname,
            });
          }
        } else {
          setUser(null);
        }
      }
    } catch (error) {
      console.error("Failed to fetch user:", error);
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.user) {
          fetchUser();
        } else {
          setUser(null);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error);
    } else {
      setUser(null);
      window.location.href = "/";
    }
  };

  return (
    <ul
      className={`nav nav-tabs flex items-center ${
        user ? "logged-in" : "logged-out"
      }`}
    >
      <li className="nav-item mx-2">
        <Link href="/" className="no-underline">
          <div className="nav-link">
            <img
              src="/logo.png"
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
          </div>
        </Link>
      </li>

      <li className="nav-item mx-2">
        <Link href="/concerts" className="no-underline">
          <span className="text-[#10AF86] no-underline">공연정보 게시판</span>
        </Link>
      </li>

      <li className="nav-item mx-2">
        <Link href="/posts" className="no-underline">
          <span className="text-[#10AF86] no-underline">자유게시판</span>
        </Link>
      </li>

      <li className="nav-item ms-auto relative mx-2">
        <a
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-expanded="false"
        >
          {user ? user.nickname : "훈돌라"}
        </a>
        <ul className="dropdown-menu absolute">
          <li>
            <a className="dropdown-item" href="#">
              마이페이지
            </a>
          </li>
        </ul>
      </li>

      {user ? (
        <li className="nav-item mx-2">
          <button
            onClick={handleLogout}
            className="no-underline text-[#10AF86]"
          >
            로그아웃
          </button>
        </li>
      ) : (
        <>
          <li className="nav-item mx-2">
            <Link href="/auth/login" className="no-underline">
              <p className="text-[#10AF86]">로그인</p>
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link href="/auth/signup" className="no-underline">
              <p className="text-[#2e2e2e]">회원가입</p>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default Header;
