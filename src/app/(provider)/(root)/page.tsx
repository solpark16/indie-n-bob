"use client";

import { createClient } from "@/utils/supabase/client";
import axios from "axios";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const supabase = createClient();
    const fetchData = async () => {
      const { data } = await supabase.auth.getUser();
      return data;
    };
    fetchData();
  }, []);
  const handleLogout = async () => {
    try {
      const response = await axios.delete("/api/auth/signup");
      if (response.status === 200) {
        alert("로그아웃 성공");
        localStorage.removeItem("token");
        window.location.href = "/auth/login";
      } else {
        console.error("로그아웃 실패:", response.data.error);
      }
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    }
  };
  return (
    <main>
      <button onClick={handleLogout}>로그아웃</button>
    </main>
  );
}
