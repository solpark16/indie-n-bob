'use client';

import { useState } from 'react';
import MyPostListView from './MyPostListView';
import MyPostGalleryView from './MyPostGalleyView';


export default function PostSwitcher({ posts }: { posts: any[] }) {
    const [viewType, setViewType] = useState<'list' | 'gallery'>('list');

    return (
        <>
            <div className="flex items-center justify-end space-x-4 mt-4">
                <button className={`px-4 py-2 ${viewType === 'list' ? 'bg-gray-200' : 'bg-white'} border rounded`} onClick={() => setViewType('list')}>
                    리스트형
                </button>
                <button className={`px-4 py-2 ${viewType === 'gallery' ? 'bg-gray-200' : 'bg-white'} border rounded`} onClick={() => setViewType('gallery')}>
                    갤러리형
                </button>
            </div>
            <div className="mt-4">
                {viewType === 'list' ? <MyPostListView posts={posts} /> : <MyPostGalleryView posts={posts} />}
            </div>
        </>
    );
}