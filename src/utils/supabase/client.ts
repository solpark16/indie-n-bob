import { Database } from '@/types/supabase'
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL! as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! as string
  )
}

// 클라이언트 컴포넌트에서 보일러 플레이트 발생하여 여기에서 export 했습니다. -저승사자-
const supabase = createClient();

export default supabase;