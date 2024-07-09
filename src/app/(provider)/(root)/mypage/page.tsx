import ProfileEditButton from '@/components/MyPage/ProfileEdit/ProfileEditButton';
import MyPostViewSwitcher from '@/components/MyPage/PostView/MyPostViewSwitcher';
import { getUser } from '@/utils/getUser';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export default async function MyPage() {
    const user = await getUser();

    if (!user) {
        <div>
            로그인 하고 다시 오시오.
        </div>
        redirect('/login');
    }

    const supabase = createClient();
    const { data: posts, error } = await supabase
        .from('recommendation_posts')
        .select('*')
        .eq('author_id', user.id);

    if (error) {
        return (
            <div className='w-full'>
                <div className='p-4 mx-auto max-w-4xl'>
                    <p className='text-2xl font-bold'>게시글을 불러오던 중 에러가 발생했습니다. 다시 시도해주세요.</p>
                    <p>에러가 지속되면 관리자에게 문의해주세요 : {error.message}</p>
                </div>
            </div>
        )
    }

    return (

        <div className="w-full">
            <div className="p-4 mx-auto max-w-4xl">
                <div className="flex items-center space-x-4">
                    <img src="https://stfauxrjudaltlmspsnv.supabase.co/storage/v1/object/public/users/public/user_default.png" alt="Profile" className="w-40 h-40 rounded-full" />
                    <div className="flex-1 flex items-center justify-between">
                        <div>
                            <div>
                                <div className="flex items-center">
                                    <span className="text-2xl font-bold">병준원영</span>
                                    <ProfileEditButton />
                                </div>
                                <hr className="border-gray-300 w-full mt-4" />
                                <div className='mt-2'>
                                    <p className="flex items-center">
                                        <img src="/favorite_artist_icon.svg" alt="Favorite Artist Icon" className="inline-block w-4 h-4 mr-2 animate-pulse" />
                                        선호하는 뮤지션
                                    </p>
                                    {/* <div className="flex flex-wrap gap-2 mt-4">
                                        {tags.map((tag, index) => (
                                            <span key={index} className="text-sm text-primary">#{tag}</span>
                                        ))}
                                    </div> */}
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