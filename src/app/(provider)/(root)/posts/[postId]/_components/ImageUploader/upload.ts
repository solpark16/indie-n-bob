"use client";

import { createClient } from "@/utils/supabase/client";

const BUCKET_NAME = "posts";
const BUCKET_PATH = "recommendation";

export async function upload(file: File): Promise<string> {
  const fileEx = file.name.split(".").pop();
  const fileName = `${Date.now()}-${Math.random()}.${fileEx}`;
  const filePath = `${BUCKET_PATH}/${fileName}`;

  const supabase = createClient();
  const { error: uploadError } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, file);
  if (uploadError) {
    throw new Error(uploadError.message);
  }

  const { data: image } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(filePath);

  return image.publicUrl;
}
