import supabase from "./supabase/client";

export async function getUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  
  if (error || !user) {
    return null;
  }
  
  return user;
}