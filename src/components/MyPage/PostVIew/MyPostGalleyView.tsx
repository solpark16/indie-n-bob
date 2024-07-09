const MyPostGalleryView = ({ posts }: { posts: any[] }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {posts.map((post) => (
                <div key={post.post_id} className="p-4 ease-in-out duration-400 transition-transform transform hover:-translate-y-2">
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-2xl mb-2" />
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-medium truncate">{post.title}</span>
                        <div className="flex items-center space-x-2">
                            <span className="text-primary">❤</span>
                            <span>10</span>
                        </div>
                    </div>
                    <p className="mt-2 text-gray-600 line-clamp-3">{post.content}</p>
                    <div className="flex items-center space-x-2 mt-2 text-gray-500 text-sm">
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyPostGalleryView;