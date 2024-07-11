import MyProfile from '@/components/MyPage/ProfileEdit/MyProfile';
import MyPostViewSwitcher from '@/components/MyPage/PostView/MyPostViewSwitcher';

export default async function MyPage() {

    return (
        <div className='w-full'>
            <div className='p-4 mx-auto max-w-4xl w-full'>
                <MyProfile />
                <div className='mt-32'>
                    <span className="text-2xl font-bold">내가 쓴 게시글</span>
                    <hr className="border-gray-300 w-full mt-4" />
                </div>
                <div className='mt-8'>
                    <MyPostViewSwitcher />
                </div>
            </div>
        </div>
    );
}