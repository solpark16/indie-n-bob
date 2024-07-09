const MyPostListView = ({ posts }: { posts: any[] }) => {
  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <div key={index} className="flex items-start space-x-4 p-4 ease-in-out duration-400 transition-transform transform hover:-translate-y-2">
          <img src="https://img.sbs.co.kr/newsnet/etv/upload/2023/04/06/30000838382.jpg" alt={post.title} className="w-52 h-32 rounded-2xl" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium ">{post.title}</span>
              <span className="text-gray-500 text-sm">{new Date(post.created_at).toLocaleDateString()}</span>
            </div>
            <div className="mt-2 h-16 text-gray-600">
              <p>{post.content}</p>
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