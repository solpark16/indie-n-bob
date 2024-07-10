import MyProfile from '@/components/MyPage/ProfileEdit/MyProfile';
import MyPostViewSwitcher from '@/components/MyPage/PostView/MyPostViewSwitcher';
import { getUser } from '@/utils/getUser';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function MyPage() {
    const user = await getUser();

    // 인증 정보 없으면 리다이렉트 (미들웨어 추가되기 전까지 임시 사용)
    if (!user) {
        redirect('/auth/login');
    }

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
        <div className='w-full'>
            <div className='p-4 mx-auto max-w-4xl w-full'>
                <MyProfile userData={userData[0]} />
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