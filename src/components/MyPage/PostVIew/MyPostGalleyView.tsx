const MyPostGalleryView = ({ posts }: { posts: any[] }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {posts.map((post, index) => (
                <div key={index} className="p-4 ease-in-out duration-400 transition-transform transform hover:-translate-y-2">
                    <img src="https://img.sbs.co.kr/newsnet/etv/upload/2023/04/06/30000838382.jpg" alt={post.title} className="w-full h-48 object-cover rounded-2xl mb-2" />
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-medium">{post.title}</span>
                        <div className="flex items-center space-x-2">
                            <span className="text-main-green">❤</span>
                            <span>10</span>
                        </div>
                    </div>
                    <p className="mt-2 text-gray-600 h-20">{post.content}</p>
                    <div className="flex items-center space-x-2 mt-2 text-gray-500 text-sm">
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyPostGalleryView;