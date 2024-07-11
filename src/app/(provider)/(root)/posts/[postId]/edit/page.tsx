import PostEditSection from "../_components/PostEditSection";

type Props = {
  params: { postId: number };
};

function EditPostPage({ params: { postId } }: Props) {
  return (
    <main className="py-8">
      <h2 className="hidden">게시물 수정</h2>
      <PostEditSection id={postId} />
    </main>
  );
}

export default EditPostPage;
