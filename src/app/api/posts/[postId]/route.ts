import { Post } from "@/types/Post";
import { getAuthUesrOnServer } from "@/utils/getAuthUesrOnServer";
import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

const TABLE_NAME = "recommendation_posts";
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
  const { data: post, error } = await supabase
    .from(TABLE_NAME)
    .select("*, author: author_id(user_id, nickname, profile_image)")
    .eq(PK_COLUMN_NAME, id)
    .single();

  if (error){
    return NextResponse.json({ error }, { status : 500 });
  }

  return NextResponse.json({ data : post });
}

/**
 * 게시글 Update
 */
export async function PUT(request: NextRequest, { params : {postId: id} }: parameter) {
  const { title, content, authorId, hashtags, image } : Post<false> = await request.json();

  const user = await getAuthUesrOnServer();
  if (!user || authorId !== user.id) {
    return NextResponse.json({error : {message : "수정할 수 없는 사용자입니다."}}, { status : 403 } );
  }

  const supabase = createClient();
  const { data: post, error } =await supabase
    .from(TABLE_NAME)
    .update({
      post_id : Number(id),
      title, content,
      image : image,
      hashtag: { tags: hashtags },
    })
    .eq(PK_COLUMN_NAME, id)
    .select()
    .single();
  
  return NextResponse.json({ data : post, error });
}

/**
 * 게시글 Delete
 */
export async function DELETE(_: NextRequest, { params : {postId: id} }: parameter) {
  const user = await getAuthUesrOnServer();
  if (!user){
    return NextResponse.json({error : {message : "로그인 후 이용해주세요"}}, { status : 403 } );
  }
  
  const supabase = createClient();
  const { error } = await supabase
    .from(TABLE_NAME)
    .delete()
    .eq(PK_COLUMN_NAME, id)
    .eq("author_id", user.id);

  return NextResponse.json({ error }, {status : (!error ? 200 : 403) });
}
