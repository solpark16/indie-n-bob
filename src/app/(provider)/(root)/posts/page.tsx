import Hashtag from "@/components/Hashtag";
import PostListView from "@/components/PostList/PostListView";

const tags: string[] = ["내요듣", "숨듣명", "내밴소"];

function PostListPage() {
  return (
    <main>
      <h2>게시판</h2>
      <Hashtag tags={tags}></Hashtag>
      <PostListView></PostListView>
    </main>
  );
}

export default PostListPage;
