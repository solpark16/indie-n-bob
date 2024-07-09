<<<<<<< HEAD:src/supabase/server.ts
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
=======
import { Database } from '@/types/supabase'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
>>>>>>> 1a4d649c3a1163d43fde94ff63a00b6d330a1c12:src/utils/supabase/server.ts

export function createClient() {
  const cookieStore = cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL! as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! as string,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
}
