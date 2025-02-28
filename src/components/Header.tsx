"use client";

import useUserData from "@/hooks/useUserData";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface User {
  email: string;
  nickname: string;
}

const Header: FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const { data: userData } = useUserData();
  const pathname = usePathname();

  const supabase = createClient();

  const fetchUser = async () => {
    try {
      const { data: sessionData, error: sessionError } =
        await supabase.auth.getSession();
      if (sessionError) {
        console.error("Error getting session:", sessionError);
        setUser(null);
      } else {
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
            setUser({
              email: sessionData.session.user.email ?? "",
              nickname: profileData.nickname ?? "",
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
    <div className="border-bottom">
      <ul
        className={`w-[90%] mx-auto nav flex items-center ${
          user ? "logged-in" : "logged-out"
        }`}
      >
        <li className="nav-item mx-2">
          <Link href="/" className="no-underline">
            <div className="nav-link">
              <Image
                src="/logo.png"
                alt="Logo"
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
            </div>
          </Link>
        </li>

        <li className="nav-item mx-3">
          <Link href="/concerts" className="no-underline">
            <span
              className={`no-underline ${
                pathname.includes("/concerts")
                  ? "text-main-color"
                  : "text-font-color"
              }`}
            >
              공연정보
            </span>
          </Link>
        </li>

        <li className="nav-item mx-3">
          <Link href="/posts" className="no-underline">
            <span
              className={`no-underline ${
                pathname.includes("/posts")
                  ? "text-main-color"
                  : "text-font-color"
              }`}
            >
              자유게시판
            </span>
          </Link>
        </li>

        {userData ? (
          <li className="nav-item ms-auto relative mx-2">
            <a
              className="nav-link dropdown-toggle text-main-color"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mb-0 mr-2">
                  <Image
                    alt="profile"
                    className="w-full h-full object-cover"
                    width={40}
                    height={40}
                    src={
                      userData.userData?.profile_image ??
                      "/user/fallback-avatar.svg"
                    }
                  />
                </div>
                {user && userData && userData?.userData
                  ? userData?.userData?.nickname
                  : ""}
              </div>
            </a>
            <ul className="dropdown-menu absolute">
              <li>
                <Link className="dropdown-item" href="/mypage">
                  마이페이지
                </Link>
              </li>
              <li className="nav-item">
                <button
                  onClick={handleLogout}
                  className="dropdown-item no-underline text-[#10AF86]"
                >
                  로그아웃
                </button>
              </li>
            </ul>
          </li>
        ) : (
          <>
            <li className="nav-item mx-2 ms-auto">
              <Link href="/auth/login" className="no-underline">
                <p className="text-main-color mb-0">로그인</p>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/auth/signup" className="no-underline">
                <p className="text-font-color mb-0">회원가입</p>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;
