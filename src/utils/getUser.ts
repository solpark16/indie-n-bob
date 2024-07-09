import { createClient } from "./supabase/server";

export async function getUser() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  
  if (error) throw new Error(error.message);
  
  return user;
}