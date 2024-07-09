import MyPostViewSwitcher from '../../../components/MyPage/PostVIew/MyPostViewSwitcher';
import ProfileEditButton from '@/components/MyPage/ProfileEdit/ProfileEditButton';

export default function MyPage() {
    const posts = Array.from({ length: 100 }, (_, index) => ({
        "post_id": `아이디테스트${index}`,
        "title": `글제목테스트${index}`,
        "content": `글내용테스트${index}`,
        "created_at": "2024-02-29",
        "user_id": `아이디테스트${index}`,
        "likes": 10,
        "comments": 10,
        "images": ["image1", "image2", "image3"],
    }));

    const tags = ["실리카겔", "검정치마", "브로콜리너마저", "장원영", "예빛", "김필선", "모브닝", "신지훈", "박한", "안희수", "짙은", "초승", "찰리반웍스", "데이먼스 이어", "오열", "백예린", "백아", "소각소각", "혁오밴드", "알레프", "최유리", "김마리", "한로로"
    ];

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
                                <div className='mt-2'>
                                    <p>
                                        <img src="/favorite_artist_icon.svg" alt="Favorite Artist Icon" className="inline-block w-4 h-4 mr-2 animate-pulse" />
                                        선호하는 뮤지션
                                    </p>
                                    <div className="flex flex-wrap space-x-2 mt-4">
                                        {tags.map((tag, index) => (
                                            <span key={index} className="text-sm text-main-green">#{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='mt-32'>
                    <span className="text-2xl font-bold">내가 쓴 게시글</span>
                </div>
                <div className='mt-8'>
                    <MyPostViewSwitcher posts={posts} />
                </div>
            </div>
        </div>

    );
}