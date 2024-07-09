const MyPostListView = ({ posts }: { posts: any[] }) => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.post_id} className="flex items-start space-x-4 p-4 ease-in-out duration-400 transition-transform transform hover:-translate-y-2">
          <img src={post.image} alt={post.title} className="w-52 h-32 rounded-2xl" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium truncate">{post.title}</span>
              <span className="text-gray-500 text-sm">{new Date(post.created_at).toLocaleDateString()}</span>
            </div>
            <div className="mt-2 h-16 text-gray-600">
              <p className="line-clamp-3">{post.content}</p>
            </div>
            <div className="flex items-center space-x-2 mt-2 text-gray-500 text-sm">
              <span className="text-primary">❤</span>
              <span>10</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPostListView;