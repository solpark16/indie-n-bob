import ProfileEditButton from '@/components/MyPage/ProfileEdit/ProfileEditButton';
import MyPostViewSwitcher from '@/components/MyPage/PostView/MyPostViewSwitcher';
import { getUser } from '@/utils/getUser';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function MyPage() {
    const user = await getUser();

    // if (!user) {
    //     redirect('/auth/login');
    // }

    const supabase = createClient();
    const { data: posts, error: postError } = await supabase
        .from('recommendation_posts')
        .select('*')
        .eq('author_id', user.id);

    const { data: userData, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('user_id', user.id);

    console.log(userData[0]);
    console.log(posts);

    if (postError || userError) {
        return (
            <div className='w-full'>
                <div className='p-4 mx-auto max-w-4xl'>
                    <p className='text-2xl font-bold'>게시글을 불러오던 중 에러가 발생했습니다. 다시 시도해주세요.</p>
                    <p>에러가 지속되면 관리자에게 문의해주세요 : {postError ? postError.message : userError.message}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full">
            <div className="p-4 mx-auto max-w-4xl w-full">
                <div className="flex items-center space-x-4 w-full">
                    <img src={userData[0].profile_image} alt="Profile" className="w-40 h-40 rounded-full" />
                    <div className="flex-1 flex items-center justify-between w-full">
                        <div className="w-full">
                            <div className="flex items-center justify-between w-full">
                                <span className="text-4xl font-bold">{userData[0].nickname}</span>
                                <ProfileEditButton userData={userData[0]} />
                            </div>
                            <hr className="border-gray-300 w-full mt-4" />
                            <div className='mt-2'>
                                <p className="flex items-center">
                                    <img src="/favorite_artist_icon.svg" alt="Favorite Artist Icon" className="inline-block w-4 h-4 mr-2 animate-pulse" />
                                    선호하는 뮤지션
                                </p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {Array.isArray(userData[0].favorite_artist) && userData[0].favorite_artist.map((artist: string, index: number) => (
                                        <span key={index} className="text-sm text-main-color">#{artist}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-32'>
                    <span className="text-2xl font-bold">내가 쓴 게시글</span>
                    <hr className="border-gray-300 w-full mt-4" />
                </div>
                <div className='mt-8'>
                    <MyPostViewSwitcher posts={posts} />
                </div>
            </div>
        </div>
    );
}