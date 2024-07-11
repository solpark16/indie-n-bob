import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

const TABLE_NAME = "concert_posts";
const PK_COLUMN_NAME = "post_id";

type parameter = {
  params: { postId: number };
};

/**
 * 게시글 Read
 * @returns post 객체
 */
export async function GET(_: NextRequest, params: parameter) {
  const {
    params: { postId: id },
  } = params;

  const supabase = createClient();
  const { data: post } = await supabase
    .from(TABLE_NAME)
    .select("*, users:author_id(*)")
    .eq(PK_COLUMN_NAME, id)
    .single();

  return NextResponse.json(post);
}

/**
 * 게시글 Create
 * @returns post 객체
 */
// export async function POST(request: NextRequest) {
//   const { title, content, nickname, hashtags, image }: Post =
//     await request.json();

//   const supabase = createClient();
//   const { data: post } = await supabase
//     .from(TABLE_NAME)
//     .insert({
//       title,
//       content,
//       author_nickname: nickname,
//       hashtag: { tags: [...hashtags] },
//       image,
//     })
//     .select();

//   return NextResponse.json(post);
// }

/**
 * 게시글 Update
 */
// export async function PUT(request: NextRequest, params: parameter) {
//   // TODO 동작 확인 필요
//   const {
//     params: { postId: id },
//   } = params;
//   const { title, content, nickname, hashtags, image }: Post =
//     await request.json();

//   const supabase = createClient();
//   const { data: post } = await supabase
//     .from(TABLE_NAME)
//     .update({
//       title,
//       content,
//       author_nickname: nickname,
//       hashtag: { tags: [...hashtags] },
//       image,
//     })
//     .eq(PK_COLUMN_NAME, id)
//     .select();

//   return NextResponse.json(post);
// }

/**
 * 게시글 Delete
 */
// export async function DELETE(_: NextRequest, params: parameter) {
//   // TODO 동작 확인 필요
//   const {
//     params: { postId: id },
//   } = params;
//   const supabase = createClient();
//   const { error } = await supabase
//     .from(TABLE_NAME)
//     .delete()
//     .eq(PK_COLUMN_NAME, id);

//   return NextResponse.json(error ? error : `게시글(${id}) 삭제 완료`);
// }
