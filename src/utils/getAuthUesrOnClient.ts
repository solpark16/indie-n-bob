"use client";

import { createClient } from "./supabase/client";

export async function getAuthUesrOnClient() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return null;
  }

  return user;
}