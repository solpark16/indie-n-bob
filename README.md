# Indie N Bob

![CleanShot 2024-07-12 at 22 15 10](https://github.com/user-attachments/assets/1468c0a5-4070-4f3b-af24-a4bbb1d24db3)

<img width="960" alt="홍보배너" src="https://github.com/user-attachments/assets/85d4cd57-a0d9-4210-8152-97ca233a22c2">

# 프로젝트 소개

## 배포 링크

## 어떤 사이트인가요?

타인의 자본(제작자의 자본)에 종속되지 않고, 자신의 돈으로 직접 앨범을 제작하고, 홍보 역시 자신의 돈으로 하는 등 독립적으로 활동하는 뮤지션인 인디밴드가 본인의 공연 및 앨범을 홍보하고 사용자들은 본인이 좋아하는 곡, 밴드, 좋았던 공연을 공유하는 커뮤니티 사이트 입니다.


사이트 이름인 **Indie-N-Bob** 인디씬의 싱어송라이터, 밴드 가수들이 밥 걱정 없이(경제적 걱정 없이를 은유적으로 표현) 음악 활동을 이어나갈 수 있도록, 공연 정보를 공유하고, 팬들이 직접 가수를 추천하여 널리 알려질 수 있도록 돕는 커뮤니티를 표방하기 위해 작명하였습니다.

## 어떤 과정인가요?

- **과정명** : 내일배움캠프 프론트엔드 엔지니어 양성 과정 - React 5기
- **주관** : 스파르타코딩클럽
- **기간** : 2024.07.08 ~ 2024.07.15 (7일 간)
- **담당 튜터** : 김범수 튜터

## 프로젝트 구조가 어떻게 되나요?

```
.eslintrc.json
.gitignore
.vscode
│  ├─ extensions.json
│  └─ settings.json
README.md
components.json
├─ next.config.mjs
├─ package.json
├─ postcss.config.mjs
public
Gallery_View_icon.svg
│  ├─ Jannabi.jpg
│  ├─ LIst_VIew_Icon.svg
│  ├─ Lucy.jpg
│  ├─ SILICAGEL.webp
│  ├─ cancel.png
│  ├─ concert-default-image.png
│  ├─ favorite_artist_icon.svg
│  ├─ font
│  │  └─ PretendardVariable.woff2
│  ├─ loading-circle.gif
│  ├─ logo.png
│  ├─ next.svg
│  ├─ post
│  │  └─ fallback.svg
│  ├─ user
│  │  └─ fallback-avatar.svg
│  ├─ vercel.svg
│  └─ why.jpg
├─ src
│  ├─ app
│  │  ├─ (provider)
│  │  │  ├─ (root)
│  │  │  │  ├─ auth
│  │  │  │  │  ├─ login
│  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  └─ signup
│  │  │  │  │     └─ page.tsx
│  │  │  │  ├─ concerts
│  │  │  │  │  ├─ [postId]
│  │  │  │  │  │  ├─ edit
│  │  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  ├─ page.tsx
│  │  │  │  │  └─ write
│  │  │  │  │     └─ page.tsx
│  │  │  │  ├─ layout.tsx
│  │  │  │  ├─ mypage
│  │  │  │  │  ├─ layout.tsx
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ page.tsx
│  │  │  │  └─ posts
│  │  │  │     ├─ [postId]
│  │  │  │     │  ├─ _components
│  │  │  │     │  │  ├─ ButtonsChangePostStatus.tsx
│  │  │  │     │  │  ├─ ImageUploader
│  │  │  │     │  │  │  ├─ ImageUploader.tsx
│  │  │  │     │  │  │  └─ upload.ts
│  │  │  │     │  │  ├─ LikeButton.tsx
│  │  │  │     │  │  ├─ PostEditSection.tsx
│  │  │  │     │  │  └─ TagInput.tsx
│  │  │  │     │  ├─ edit
│  │  │  │     │  │  └─ page.tsx
│  │  │  │     │  └─ page.tsx
│  │  │  │     ├─ _components
│  │  │  │     │  ├─ PostItemSqure.tsx
│  │  │  │     │  └─ PostListView.tsx
│  │  │  │     ├─ create
│  │  │  │     │  └─ page.tsx
│  │  │  │     └─ page.tsx
│  │  │  └─ layout.tsx
│  │  ├─ api
│  │  │  ├─ auth
│  │  │  │  ├─ check
│  │  │  │  │  └─ route.ts
│  │  │  │  ├─ login
│  │  │  │  │  └─ route.ts
│  │  │  │  └─ signup
│  │  │  │     └─ route.ts
│  │  │  ├─ concerts
│  │  │  │  ├─ [postId]
│  │  │  │  │  └─ route.ts
│  │  │  │  └─ route.ts
│  │  │  └─ posts
│  │  │     ├─ [postId]
│  │  │     │  ├─ comments
│  │  │     │  │  ├─ [commentId]
│  │  │     │  │  │  └─ route.ts
│  │  │     │  │  ├─ length
│  │  │     │  │  │  └─ route.ts
│  │  │     │  │  └─ route.ts
│  │  │     │  ├─ likes
│  │  │     │  │  └─ route.ts
│  │  │     │  └─ route.ts
│  │  │     └─ route.ts
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  └─ layout.tsx
│  ├─ components
│  │  ├─ Alert.tsx
│  │  ├─ Backdrop.tsx
│  │  ├─ BreakLine.tsx
│  │  ├─ CommentList
│  │  │  ├─ Comment.tsx
│  │  │  ├─ CommentUpload.tsx
│  │  │  ├─ Comments.tsx
│  │  │  ├─ CommentsView.tsx
│  │  │  ├─ ErrorGetComments.tsx
│  │  │  ├─ LoadingComments.tsx
│  │  │  └─ modal
│  │  │     ├─ CmtDelBtn.tsx
│  │  │     ├─ CmtDelModal.tsx
│  │  │     ├─ CmtEditBtn.tsx
│  │  │     ├─ CmtEditModal.tsx
│  │  │     ├─ CmtToDel.tsx
│  │  │     └─ CmtToModi.tsx
│  │  ├─ ConcertList
│  │  │  ├─ ConcertDeleteButton.tsx
│  │  │  ├─ ConcertListView.tsx
│  │  │  └─ ConcertSquare.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Hashtag.tsx
│  │  ├─ Header.tsx
│  │  ├─ HeartIcon.tsx
│  │  ├─ Loading.tsx
│  │  ├─ Mainpage
│  │  │  ├─ BestInfo.tsx
│  │  │  ├─ Carousel.tsx
│  │  │  ├─ MainLike.tsx
│  │  │  ├─ MainPage.tsx
│  │  │  └─ PerformanceInfo.tsx
│  │  ├─ MyPage
│  │  │  ├─ PostVIew
│  │  │  │  ├─ HowManyLikes.tsx
│  │  │  │  ├─ MyPostGalleyView.tsx
│  │  │  │  ├─ MyPostListView.tsx
│  │  │  │  └─ MyPostViewSwitcher.tsx
│  │  │  └─ ProfileEdit
│  │  │     ├─ MyProfile.tsx
│  │  │     ├─ ProfileEditButton.tsx
│  │  │     └─ ProfileEditModal.tsx
│  │  └─ ui
│  │     └─ alert.tsx
│  ├─ constant.ts
│  ├─ hooks
│  │  ├─ useAllLIkes.ts
│  │  ├─ useInfinitePosts.tsx
│  │  ├─ useMyPosts.ts
│  │  └─ useUserData.ts
│  ├─ lib
│  │  └─ utils.ts
│  ├─ middleware.ts
│  ├─ types
│  │  ├─ Auth.ts
│  │  ├─ Comments.ts
│  │  ├─ Concert.ts
│  │  ├─ Post.ts
│  │  ├─ Tag.ts
│  │  └─ supabase.ts
│  ├─ utils
│  │  ├─ formatDateString.ts
│  │  ├─ getAuthUesrOnClient.ts
│  │  ├─ getAuthUesrOnServer.ts
│  │  ├─ getConcerts.ts
│  │  ├─ getLikes.ts
│  │  ├─ getMyInfo.ts
│  │  ├─ getMyPosts.ts
│  │  ├─ getUser.ts
│  │  ├─ myPage
│  │  │  ├─ getLikes.ts
│  │  │  ├─ getMyInfo.ts
│  │  │  ├─ getMyPosts.ts
│  │  │  └─ getUser.ts
│  │  └─ supabase
│  │     ├─ client.ts
│  │     ├─ middleware.ts
│  │     └─ server.ts
│  └─ zustand
│     ├─ alert.store.ts
│     └─ auth.store.ts
├─ supabase
│  ├─ .gitignore
│  ├─ .temp
│  │  └─ cli-latest
│  ├─ config.toml
│  └─ seed.sql
├─ tailwind.config.ts
├─ tsconfig.json
└─ yarn.lock
```

## 사용한 기술 스택은 어떻게 되나요?

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/node.js-5fa84e?style=for-the-badge&logo=node.js&logoColor=white"> <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"> <img src="https://img.shields.io/badge/figma-E34f26?style=for-the-badge&logo=figma&logoColor=white"> <img src="https://img.shields.io/badge/tailwindCSS-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white"> <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/supabase-3fcf8e?style=for-the-badge&logo=supabase&logoColor=white"> <img src="https://img.shields.io/badge/axios-5a29e4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/tanstackquery-ff4154?style=for-the-badge&logo=reactquery&logoColor=white"> <img src="https://img.shields.io/badge/.env-ecd53f?style=for-the-badge&logo=.env&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/json-000000?style=for-the-badge&logo=json&logoColor=white"> <img src="https://img.shields.io/badge/slack-4a154b?style=for-the-badge&logo=slack&logoColor=white"> <img src="https://img.shields.io/badge/markdown-000000?style=for-the-badge&logo=markdown&logoColor=white"> <img src="https://img.shields.io/badge/eslint-4b32c3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">


### 프레임워크 및 언어
- **Next.js**: React 기반의 프레임워크로 서버 사이드 렌더링과 정적 사이트 생성을 지원하여 빠른 웹사이트를 구축하는 데 사용되었습니다.
- **TypeScript**: 정적 타입을 지원하는 JavaScript의 상위 집합 언어로, 코드의 안정성과 유지보수성을 높이는 데 사용되었습니다.

### 와이어프레임
- **Figma**: 프로젝트 기획 단계에서 웹 사이트의 UI 와이어프레임을 작성하는 데 사용되었습니다.

### 배포 및 호스팅
- **Vercel**: Next.js 애플리케이션을 쉽게 배포하고, 서버리스 함수 및 정적 사이트를 호스팅하는 데 사용되었습니다.

### 스타일링
- **TailwindCSS**: 유틸리티-퍼스트 CSS 프레임워크로, 빠르고 효율적인 스타일링을 위해 사용되었습니다.
- **bootstrap**: 기존의 컴포넌트와 유틸리티 클래스를 활용하여 메인 페이지 케러셀 스타일링을 보완하는 데 사용되었습니다.
- **styled-components**: CSS-in-JS 라이브러리로, JavaScript에서 직접 스타일을 정의하고 컴포넌트 수준에서 관리하는 데 사용되었습니다.
- **clsx**: 조건부로 클래스를 적용하는 데 유용한 유틸리티로, TailwindCSS와 함께 사용되었습니다.

### 데이터 관리 및 요청
- **supabase**: 오픈 소스 백엔드 서비스로, 데이터베이스 관리와 인증, 실시간 데이터베이스 기능을 제공하는 데 사용되었습니다.
- **supabase-auth**: supabase의 인증/인가 기능을 이용하여 사용자 인증을 처리하는 데 사용되었고, 인증된 사용자만 접근 가능한 인가 페이지를 작성하는 데 사용되었습니다.
- **axios**: HTTP 클라이언트 라이브러리로, API 요청을 보내고 데이터를 가져오는 데 사용되었습니다.
- **tanstack query**: 서버 상태를 관리하고 비동기 데이터 페칭, 캐싱 및 동기화를 처리하는 데 사용되었습니다.
- **tanstack query devtools**: tanstack query의 디버깅 도구로, 데이터 페칭 상태를 모니터링하고 디버깅하는 데 사용되었습니다.
- **zustand**: React 상태 관리를 위한 작고 빠른 상태 관리 라이브러리로, 애플리케이션의 전역 상태를 관리하는 데 사용되었습니다.

### 유틸리티
- **class-variance-authority**: 다양한 CSS 클래스를 쉽게 관리하고 조합하는 데 사용되었습니다.
- **uuid**: 이미지 주소, 게시글의 고유 식별자를 생성하는 데 사용되었습니다.
- **moment**: 날짜와 시간을 쉽게 다루기 위해 사용되었습니다.
- **react-icons**: 다양한 아이콘을 React 컴포넌트로 쉽게 사용하기 위해 사용되었습니다.
- **lucide-react**: 모던한 SVG 아이콘 세트로, 아이콘을 쉽게 사용할 수 있게 도와주는 라이브러리입니다.
- **react-intersection-observer**: TanStack Query와 혼합 사용하여 무한스크롤을 구현하는 데 사용되었습니다.
- **sweetalert2**: 모던하고 반응형 알림 팝업을 제공하는 라이브러리로, 사용자 인터페이스의 피드백을 제공하는 데 사용되었습니다.


# 팀원 소개

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/solpark16"><img src="https://www.joseilbo.com/gisa_img_origin/16763579091676357909_joseedu_origin.jpg" width="200px;" height="200px;" alt="image"/><br /><b>팀장 : 박솔 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/Captain-Kim"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRke9F-1q6UohfTK_5mzASiIfi5mXrogc0oSA&s" width="200px;" height="200px;" alt="image"/><br /><b>팀원 : 김병준</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/hoondolla"><img src="https://img.etoday.co.kr/pto_db/2023/04/20230424155422_1877003_586_788.jpg" width="200px;" height="200px;" height="200px;" alt="image"/><br /><b>팀원 : 김재훈</b></sub></a><br /></td>
       <tr/>
      <td align="center"><a href="https://github.com/oneieo"><img src="https://images.khan.co.kr/article/2022/11/08/news-p.v1.20221108.1deab8c7f6ed4c5282a8c3e604470063_P1.jpg" width="200px;" height=
    "200px;" height="200px;" alt="image"/><br /><b>팀원 : 선지원</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/ejunyang"><img src="https://cdn.imweb.me/upload/S202207215f9bbbf5e9735/a4c1af2bfa743.jpg" width="200px;" height="200px;" alt="image"/><br /><b>팀원 : 양이준</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/reeny404"><img src="https://cdn.9oodnews.com/news/photo/202208/18292_27051_2611.jpg" width="200px;" height="200px;" alt="image"/><br /><b>팀원 : 이효현</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

## 각 팀원은 어떤 역할을 맡았나요?

### 팀장 : 박솔

- 팀 리딩, 회의 주관
- 와이어 프레임 작성 리딩
- 프로젝트 발표 PPT 제작
- 공연 정보 리스트 페이지
  - useInfiniteQuery 활용 무한 스크롤 구현
  - sort 활용 포스트 정렬 기능 구현
    - 최신순 / 랭킹순(좋아요 순) / 공연종료 임박순
  - 공연 게시물 없을 경우 텍스트 추가
- 공연 등록 페이지 (CRUD)
  - 각 입력 필드 유효성 검사 구현
  - 사용자가 입력한 링크가 없을 경우 '자세히 보기' 버튼 뜨지 않도록 조건부 렌더링 구현
  - '관리자' 등급의 사용자만 페이지에 접근 가능하도록 인가
- 공연 정보 상세 페이지
  - 해당 글에 supabase foreign key를 연결하여 데이터를 함께 가져와 페이지에 구현
- 공연 정보 삭제 기능 구현
  - 인가된 사용자에게만 삭제 권한 부여
- 공연 정보 수정 기능
  - 각 입력 필드 유효성 검사 구현
  - 인가된 사용자에게만 수정 권한 부여
  - useMutation 및 invalidateQueries 활용 수정된 내용 즉각 반영되도록 구현
- '좋아요' 기능 구현
  - optimistic update 구현

### 팀원 : 김병준

- Supabase 데이터 테이블, 스토리지 셋업 및 스키마 설정
- 프로젝트 readme 작성
- 마이페이지
  - 인증된 사용자 프로필 정보 렌더링 컴포넌트
    - 인증된 사용자의 프로필 정보를 supabase auth 스키마에서 불러온 뒤, users 데이터 테이블에서 사용자의 id를 검증 후 인가된 사용자에게만 기존 정보를 렌더링하도록 구현
  - 프로필 수정 컴포넌트
    - 기존 마이페이지에서 페이지 이동 없이 깔끔한 UX를 제공하기 위해 모달 형태로 구현
    - TanStack Query 활용, 사용자가 프로필 정보 변경 후 마이페이지로 이동하였을 때 invalidateQueries를 통해 변경된 정보가 즉각 렌더링 되도록 구현
    - 프로필 이미지 useState React hook 활용 optimistic preview 구현
  - 나의 게시글 리스트 렌더링 컴포넌트
    - 리스트형 보기와 갤러리형 보기를 아이콘 클릭으로 전환할 수 있도록 구현
    - TanStack Query 활용, 데이터 캐싱
    - TanStack Query와 Intersection-observer를 활용하여 infinite scroll 구현
    - 사용자의 게시글에 눌러진 좋아요를 계산하는 로직을 작성하여 커스텀 훅 작성 및 총 3개 페이지에서 재사용하도록 구현
    - 나의 게시글 클릭 시 router.push를 통해 해당 게시글의 상세 페이지로 이동하도록 구현
- 게시글 작성 페이지
  - 입력필드 별 유효성 검사
  - 인가된 사용자의 인증 정보를 supabase auth 스키마에서 불러와 posts 데이터 테이블에 insert 하도록 구현
  - 게시글 첨부 이미지 useState React hook 활용 optimistic preview 구현

### 팀원 : 김재훈

- 프로젝트 시연 영상 촬영
- 메인 페이지 / @tanstack/react-query next/image next/link supabase
  - 공연 정보 렌더링
    - Supabase 데이터베이스에서 공연 정보를 가져와 화면에 표시하는 역할. 이 컴포넌트는 useQuery 훅을 사용하여 데이터를 비동기적으로 가져오며, 
    - 가져온 데이터를 최신 순으로 정렬하여 상위 3개의 공연 정보를 화면에 렌더링.
  - 베스트 게시글 렌더링 / @tanstack/react-query next/image next/link supabase
    - Supabase에서 추천 게시글 데이터를 가져와 좋아요 수를 기준으로 정렬한 후 상위 4개의 게시글을 화면에 렌더링. 
    - 이 컴포넌트는 useQuery 훅을 사용하여 데이터를 비동기적으로 가져오며, useAllLikes 훅을 사용하여 각 게시글의 좋아요 데이터를 가져오고, 
    useEffect 훅을 이용해 게시글 데이터와 좋아요 데이터를 결합하여 각 게시글의 좋아요 수를 계산, 좋아요 수를 기준으로 게시글을 정렬함.
  - 헤더 / supabase: Supabase @tanstack/react-query next/image next/link next/navigation
    - 사용자의 인증 상태와 프로필 정보를 관리하고, 다양한 페이지로 이동할 수 있는 네비게이션 메뉴를 제공. 
    - 사용자가 로그인한 상태에서는 프로필 이미지와 닉네임을 표시하고, 로그아웃 기능을 제공. 
    - 로그아웃 시에는 메인 페이지로 리디렉션. 로그인하지 않은 상태에서는 로그인 및 회원가입 링크를 표시.


### 팀원 : 선지원

- 댓글 리스트 렌더링 페이지 
  - 최신순 정렬 기능 구현
  - 페이지네이션 구현 : 사용자가 댓글 리스트에 대해 GET 요청 시 query string으로 limit 값과 offset 값을 전달하여 페이지 당 5개의 댓글을 가져오도록 구현
- 댓글 기능 구현 (CRUD)
  - 댓글 작성 시 댓글 작성자의 인증 정보를 supabase auth 스키마에서 불러와 comments 데이터 테이블에 insert 하도록 구현
  - 댓글 삭제 시 댓글 삭제 요청을 보낸 사용자의 인가 여부를 검증하는 API 로직 작성

### 팀원 : 양이준

- 와이어 프레임 작성 리딩
- 로그인/회원가입
  - 이메일 중복 검사 및 비밀번호 생성 조건 충족 유효성 검사 로직 구현
  - 선호하는 아티스트 배열 저장, 관리자/일반회원 선택하여 회원등급 저장 로직 구현

### 팀원 : 이효현

- Next.js 프로젝트 셋업
- 프로젝트 발표
- GitHub 공용 repository 셋업 및 총괄
- 게시글 Update/Delete
  - 인가된 사용자가 자신의 게시글을 수정 및 삭제할 수 있도록 구현
  - U/D 요청을 보낸 사용자의 인가 여부를 검증하는 API 로직 작성
- 게시글 리스트 페이지 구현
  - TasStack Query를 활용, 데이터 캐싱
  - Infinite Scroll 구현
- 좋아요 기능 구현

## 어떻게 협업했나요?

### GitHub Repository

- 공용 Repository를 생성하여 프로젝트 협업
- 기획 회의에서 약속한 Commit Convention을 준수하여 직관적인 작업 현황 파악
- 페이지 별, 기능 별 branch를 생성하여 충돌 방지
- 팀원 2명 이상 approve된 PR만 merge 가능하도록 설정하여 코드 병합 시 충돌 방지 및 효과적인 코드 리뷰 진행

### GitHub Issues

- 작업 현황 및 발생한 이슈에 대한 신속한 공유 및 해결을 위해 사용

### Slack

- 실시간 소통을 위한 채널을 생성하여 프로젝트 진행 상황 공유 및 의견 교환

### Notion

- 프로젝트 기획 및 그라운드 룰, 데이터 베이스 테이블 명세서를 문서화하여 최초 기획과 일관된 프로젝트 협업

### Figma

- 웹 사이트의 UI를 작성하기 위해 사용

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/user-attachments/assets/5d781ccb-e7a5-4364-9760-ddbff018fa11"><img src="https://github.com/user-attachments/assets/5d781ccb-e7a5-4364-9760-ddbff018fa11" width="300px;" height="300px;" alt="image"/><br /><b>GitHub 공용 Repository</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/user-attachments/assets/1a33d8b0-ffc0-48df-bf36-a94c7f9b8d10"><img src="https://github.com/user-attachments/assets/1a33d8b0-ffc0-48df-bf36-a94c7f9b8d10" width="300px;" height="300px;" alt="image"/><br /><b>GitHub Issues 활용</b></sub></a><br /></td>
    <tr/>
    <tr>
      <td align="center"><a href="https://github.com/user-attachments/assets/73cd077b-b0ec-4dba-8c2a-e78fc2e512f5"><img src="https://github.com/user-attachments/assets/73cd077b-b0ec-4dba-8c2a-e78fc2e512f5" width="300px;" height="300px;" alt="image"/><br /><b>PR 코드 리뷰</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/user-attachments/assets/75a7dc00-0fec-488e-a3b6-ae554fae1693"><img src="https://github.com/user-attachments/assets/75a7dc00-0fec-488e-a3b6-ae554fae1693" width="300px;" height="300px;" alt="image"/><br /><b>Slack을 통한 실시간 협업</b></sub></a><br /></td>
    <tr/>
    <tr>
      <td align="center"><a href="https://github.com/user-attachments/assets/f6af7546-e92c-4c31-b33a-4a0e373bfced"><img src="https://github.com/user-attachments/assets/f6af7546-e92c-4c31-b33a-4a0e373bfced" width="300px;" height="300px;" alt="image"/><br /><b>Notion을 통한 프로젝트 문서화</b></sub></a><br /></td>
    <tr/>
  </tbody>
</table>

## 와이어 프레임을 보여주세요!

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/user-attachments/assets/ab7db361-3d2b-4ace-ae2a-3a761459664a"><img src="https://github.com/user-attachments/assets/ab7db361-3d2b-4ace-ae2a-3a761459664a" width="300px;" height="300px;" alt="image"/><br /><b>메인페이지</b></sub></a><br /></td>
    </tr>
    <tr>
      <td align="center"><a href="https://github.com/user-attachments/assets/59327b2c-e7f2-4fd9-a044-ce458189ef6f"><img src="https://github.com/user-attachments/assets/59327b2c-e7f2-4fd9-a044-ce458189ef6f" width="300px;" height="300px;" alt="image"/><br /><b>로그인 페이지</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/user-attachments/assets/b3427ef3-3835-423c-ad3b-161748ff2dbe"><img src="https://github.com/user-attachments/assets/b3427ef3-3835-423c-ad3b-161748ff2dbe" width="300px;" height="300px;" alt="image"/><br /><b>회원가입 페이지</b></sub></a><br /></td>
    <tr/>
    <tr>
      <td align="center"><a href="https://github.com/user-attachments/assets/21cd235b-bbb0-45fc-afd7-903c1d9cc0d5"><img src="https://github.com/user-attachments/assets/21cd235b-bbb0-45fc-afd7-903c1d9cc0d5" width="300px;" height="300px;" alt="image"/><br /><b>게시글 작성 페이지</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/user-attachments/assets/f805124e-fe7e-4055-893c-d901c986b117"><img src="https://github.com/user-attachments/assets/f805124e-fe7e-4055-893c-d901c986b117" width="300px;" height="300px;" alt="image"/><br /><b>게시판</b></sub></a><br /></td>
    <tr/>
    <tr>
      <td align="center"><a href="https://github.com/user-attachments/assets/ef8051f9-a279-4918-bb33-6f4c11a7c34a"><img src="https://github.com/user-attachments/assets/ef8051f9-a279-4918-bb33-6f4c11a7c34a" width="300px;" height="300px;" alt="image"/><br /><b>게시글 상세 페이지</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/user-attachments/assets/2ce91891-b935-4bde-b069-fbc519ed58fe"><img src="https://github.com/user-attachments/assets/2ce91891-b935-4bde-b069-fbc519ed58fe" width="300px;" height="300px;" alt="image"/><br /><b>게시글 수정 페이지</b></sub></a><br /></td>
    <tr/>
    <tr>
      <td align="center"><a href="https://github.com/user-attachments/assets/527db44e-1ad9-4b75-9edf-a562a0bd6b98"><img src="https://github.com/user-attachments/assets/527db44e-1ad9-4b75-9edf-a562a0bd6b98" width="300px;" height="300px;" alt="image"/><br /><b>댓글 수정 모달</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/user-attachments/assets/ba781c73-3cba-4b68-81ef-a213431c7131"><img src="https://github.com/user-attachments/assets/ba781c73-3cba-4b68-81ef-a213431c7131" width="300px;" height="300px;" alt="image"/><br /><b>댓글 삭제 모달</b></sub></a><br /></td>
    <tr/>
    <tr>
      <td align="center"><a href="https://github.com/user-attachments/assets/bc12ae78-f228-48d7-836d-b095eeeb3167"><img src="https://github.com/user-attachments/assets/bc12ae78-f228-48d7-836d-b095eeeb3167" width="300px;" height="300px;" alt="image"/><br /><b>마이페이지</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/user-attachments/assets/49e879f3-b167-4796-ac58-2eba67d4ed62"><img src="https://github.com/user-attachments/assets/49e879f3-b167-4796-ac58-2eba67d4ed62" width="300px;" height="300px;" alt="image"/><br /><b>내가 쓴 게시글</b></sub></a><br /></td>
    <tr/>
    <tr>
      <td align="center"><a href="https://github.com/user-attachments/assets/dc6d7823-fe35-4b31-b6af-797edbf1eb7e"><img src="https://github.com/user-attachments/assets/dc6d7823-fe35-4b31-b6af-797edbf1eb7e" width="300px;" height="300px;" alt="image"/><br /><b>프로필 수정 모달</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/user-attachments/assets/bb14c321-70e8-443e-8fa3-e8379b77fc84"><img src="https://github.com/user-attachments/assets/bb14c321-70e8-443e-8fa3-e8379b77fc84" width="300px;" height="300px;" alt="image"/><br /><b>공연정보 등록 페이지</b></sub></a><br /></td>
    <tr/>
    <tr>
      <td align="center"><a href="https://github.com/user-attachments/assets/8a1d1c5a-a94e-4a95-9d8f-4760914fa3e7"><img src="https://github.com/user-attachments/assets/8a1d1c5a-a94e-4a95-9d8f-4760914fa3e7" width="300px;" height="300px;" alt="image"/><br /><b>공연정보 리스트 렌더링 페이지</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/user-attachments/assets/c4c8719a-9164-4d66-83fb-af967dd32076"><img src="https://github.com/user-attachments/assets/c4c8719a-9164-4d66-83fb-af967dd32076" width="300px;" height="300px;" alt="image"/><br /><b>공연정보 상세 페이지</b></sub></a><br /></td>
    <tr/>    
  </tbody>
</table>

## 멋진 웹 사이트를 보고 싶어요!

### 메인 페이지

![CleanShot 2024-07-13 at 00 48 47](https://github.com/user-attachments/assets/625f4a0c-ccbf-4e2d-90c9-4a737ddf83ae)

- Bootstrap 캐러셀을 사용하여 정적인 페이지에 생동감을 불어 넣었습니다.
- 공연정보와 인디 가수 추천 게시판을 다른 UI로 렌더링하여 생동감을 불어 넣었습니다.
- 모든 게시글을 불러오지 않고 더보기 기능을 활용하여 초기 렌더링 속도를 높였습니다.
- '좋아요'가 많이 눌린 게시글 순으로 정렬하여 사용자가 양질의 정보에 쉽게 접근할 수 있도록 사용자 경험을 높였습니다.

### 게시글 렌더링 페이지

![CleanShot 2024-07-13 at 01 08 11](https://github.com/user-attachments/assets/e5632140-e39c-4bf2-bd07-27e3d9360478)

- 필수 헤시태그로 게시글을 필터링하여 사용자가 다양한 정보에서 원하는 정보에 빠르게 접근할 수 있도록 사용자 경험을 높였습니다.
- TanStack Query로 데이터를 캐싱하여 사용자가 메뉴를 전환하더라도 빠르게 렌더링 할 수 있도록 하였습니다.
- Infinite Scroll을 구현하여 초기 렌더링 속도를 높였습니다.

### 글쓰기 페이지

![CleanShot 2024-07-13 at 01 14 27](https://github.com/user-attachments/assets/9c27c6ae-559b-4c97-9907-dc3a44f3bbcf)

- 사용자가 이미지 선택 시 optimistic한 preview를 제공하여 실제 서버 업로드 없이도 사용자에게 직관적인 피드백을 제공합니다.
- 입력 필드 별 유효성 검사 메시지를 띄워 database에 null값이 생성되지 않도록 하였습니다.
- 유효성 검사 별 출력되는 경고문을 달리하여 UX를 높였습니다.

### 댓글 CRUD

![CleanShot 2024-07-13 at 01 21 21](https://github.com/user-attachments/assets/4501565f-f2a5-48f5-8d0b-afb6eb686814)

- 유효성 검사를 통하여 database에 null 값이 생기지 않도록 하였습니다.
- 자신의 댓글만 수정 및 삭제할 수 있도록 인가 처리를 하였습니다.

### 게시글 수정/삭제

![CleanShot 2024-07-13 at 01 26 38](https://github.com/user-attachments/assets/a9f0fe4b-c90d-464f-bce0-5dca76aad62c)

- 사용자가 자신의 게시글만 수정/삭제 할 수 있도록 인가 처리하였습니다.
- 게시글 내에서 사용자가 입력한 모든 정보를 수정할 수 있습니다.

### 공연정보 리스트 페이지

![CleanShot 2024-07-13 at 01 35 01](https://github.com/user-attachments/assets/40217235-1eee-4d08-9a39-c4dedf71ef32)

- TanStack Query로 데이터를 캐싱하여 빠른 렌더링이 가능하도록 하였습니다.
- 최신순/랭킹순(좋아요 순)/공연종료임박순으로 필터링 기능을 제공하여 사용자 경험을 높였습니다.
- Infinite scroll을 구현하여 초기 렌더링 속도를 높였습니다.

### 공연정보 등록 페이지

![CleanShot 2024-07-13 at 01 40 31](https://github.com/user-attachments/assets/01e5d2bc-b245-47dc-a6bc-259ea8ade3d3)

- 관리자 등급의 사용자만 입력할 수 있도록 인가 처리하였습니다.
- 추가 링크 입력 시 '자세히보기'를 조건부 렌더링하여 링크가 없을 때 불필요한 UI 렌더링되지 않도록 사용자 경험을 높였습니다.
- 각 입력 필드의 유효성 검사를 통하여 database에 null 값이 생성되지 않도록 구현하였습니다.

### 공연정보 수정/삭제 기능

![CleanShot 2024-07-13 at 01 44 53](https://github.com/user-attachments/assets/253d7ad2-64fc-4fe6-bb58-f9d78f3bc6f9)

- 기본적으로 인가된 사용자만 접근이 가능하도록 구현하였습니다.
- 게시글 수정/삭제 시 TanStack Query의 queryKey를 invalidateg하여 사용자가 서버의 최신 데이터를 볼 수 있도록 구현하였습니다.

### 좋아요 기능

![CleanShot 2024-07-13 at 01 43 44](https://github.com/user-attachments/assets/30ada7eb-4071-47d3-b268-a496eb3556e6)

- optimistic update 기법으로 즉각적인 반응을 제공해 사용자 경험을 높였습니다.

### 마이페이지

![CleanShot 2024-07-13 at 01 48 29](https://github.com/user-attachments/assets/82f9e863-a656-4e41-a247-30f64c8f7494)

- TanStack Query로 데이터를 캐싱하여 사용자에게 즉각적인 렌더링을 제공합니다.
- 리스트형, 갤러리형 보기 옵션을 제공하여 정적인 페이지에 생동감을 불어 넣었습니다.
- Infinite scroll을 통해 초기 렌더링 속도를 높였습니다.
- 프로필 수정 페이지를 모달 컴포넌트로 제작하는 방식으로 사용자의 페이지 이용 흐름을 유지시키며 사용자 경험을 높였습니다.

### 회원 정보 수정 기능

![CleanShot 2024-07-13 at 01 53 59](https://github.com/user-attachments/assets/d72ddadc-f2b6-47e9-9ffb-ffc3d30bd7be)

- 인증된 사용자의 정보에만 접근 및 수정할 수 있도록 인가 처리하였습니다.
- 프로필 이미지 변경 시 optimistic preview를 제공하여 데이터 서버와의 통신 상태에 영향을 받지 않고 즉각적인 피드백이 가능하도록 하였습니다.
- 각 입력 필드의 유효성 검사를 통해 변경 사항이 없을 때 사용자에게 경고 alert을 띄워 피드백을 제공하였습니다.
- 회원정보 수정 시 기존 프로필 정보의 queryKey를 invalidate하여 사용자가 서버의 최신 데이터를 볼 수 있도록 구현하였습니다.

### 헤더/푸터

![CleanShot 2024-07-13 at 01 59 20](https://github.com/user-attachments/assets/27c31c4a-62fe-4b0a-aaff-99f4ad055c63)

- Next.js 프레임워크에서 제공하는 prefetching 컴포넌트를 활용하여 사용자가 다른 페이지로 이동할 때 해당 페이지의 데이터를 미리 불러오고 캐싱하여 사용자가 해당 페이지로 이동할 때 빠르게 렌더링 할 수 있도록 하였습니다.
- 사용자가 웹 사이트를 이용하며 필요로 하는 메뉴를 제공하여 사용자 경험을 높였습니다.

### 회원가입/로그인

![CleanShot 2024-07-14 at 21 13 27](https://github.com/user-attachments/assets/3543b4c5-683c-4dac-9a4a-2497dd244776)

- 회원가입 시 안전한 비밀번호 생성을 위해 조건을 추가하고 유효성 검사를 하여 사용자에게 실시간으로 안내하는 로직을 구현하였습니다.
- 일반 등급과 관리자 등급을 차등하여 가입시킬 수 있도록 조건을 생성하였습니다.


## 어려운 점은 없었나요? (트러블 슈팅)

### 박솔

- **Next.js 프레임워크 구버전과의 혼동**
  - Next.js의 버전업 속도가 빠르다 보니 웹에서 얻을 수 있는 정보들이 구버전과 혼재되어 있어 어려움이 있었습니다.
  - 예를 들어 `useRouter` hook을 import 할 때 경로를 'next/router'로 입력하였더니 'NextRouter was not mounted'에러가 지속되어 이를 검색하고 학습하며 구버전과의 사용방법 차이임을 이해하고 'next/navigation'으로 입력하여 에러를 하결 할 수 있었습니다.

### 김병준

![CleanShot 2024-07-13 at 02 16 51@2x](https://github.com/user-attachments/assets/e31b28e2-0eaa-494e-89b6-68cf0b49fdba)

- **SEO 최적화 기획 부족**
  - 서비스 최초 기획 시 웹 사이트의 UI와 컨셉, 페이지에 집중하여 상대적으로 프레임워크 선택의 이유에 대한 깊은 성찰이 부족했습니다.
  - 페이지별로 SEO를 고려하여 서버 컴포넌트로 작성해야 하는 페이지, 클라이언트 컴포넌트로 작성해도 무방한 페이지 등을 구분하지 않았던 것이 아쉽습니다.
- **supabase + typescript 조합 사용에서의 최초 설계 미흡**
  - 보다 유연한 코드 작성을 위해 의도적으로 데이터 테이블의 각 컬럼에 null 입력을 허용하였으나, 결국 타입스크립트 컴파일에서 막히게 되며, 컬럼에 접근하는 모든 코드에서 null 처리를 해주어야 하는 번거로움이 생겼습니다.
  - 어차피 입력을 받는 컴포넌트에서는, 입력 필드 유효성 검사에서 null 입력을 막고 있는데, 추후 supabase와 typescript를 조합 사용 할 때는 데이터 테이블의 각 컬럼에서 의도한 부분을 제외하고는 null 입력을 제한하는 것이 좋을 것 같습니다.
- **웹사이트 성능 최적화 미흡**
  - 웹사이트의 속도가 기대했던 것보다 매우 느립니다.
  - LightHouse 검사 결과 부트스트랩, 너무 큰 이미지 용량 등이 큰 원인으로 지목되고 있습니다.
  - 게시글 작성 페이지, 회원 정보 수정 페이지를 제작하면서 이미지를 다루게 되었는데, 이전부터 webp로 변환하는 로직에 대해서 학습하고 인지하고 있었지만, 실질적인 코드 작성 기간이 약 4일로 짧은 기간이라고 생각하여 개선 과제로 미루었었는데, 무한 스크롤 등 추가 구현 기능을 제외해서라도 웹 사이트의 속도를 올릴 수 있는 기능을 우선해야 했었다는 아쉬움이 남습니다. 하지만 이는 프로젝트가 끝나더라도 리팩토링하여 개선 과제로 처리할 예정입니다.

### 김재훈

![image](https://github.com/user-attachments/assets/b7122100-1939-4878-a0e9-452c3258e568)

- **캐러셀 스타일링에서의 어려움**
  - 캐러셀 스타일에 width 100%를 적용하고 싶었으나 제대로 동작하지 않았습니다.
  - 기획 의도대로 메인 페이지 상단 width를 캐러셀로 채워야 하는데, 1280px로 고정되는 문제가 발생했습니다.
  - 원인은 공통 layout에 w-1280이 적용되어 있어 그 이상 증가하지 않았던 것으로 파악했습니다.
  - 메인 페이지의 컴포넌트들이 모여 있는 MainPage.tsx의 캐러셀을 한 번 감싸주는 `<div>`와 그 아래를 받쳐주는 `<div>`를 추가하여 스타일을 적용시켜 해결했습니다.

![image](https://github.com/user-attachments/assets/0240f469-765a-475e-8324-131c89067520)

- **데이터 반환값 예측의 어려움**
  - `likeData`가 배열로 반환될 것으로 예상했으나, 객체로 반환되어 문제가 발생했습니다.
  - 이 때문에 배열 메서드를 사용하고자 했으나 사용하지 못하는 문제가 발생했습니다.
- 데이터 비동기 처리 시 코드 실행 순서 예측의 어려움
  - API 요청 코드를 비동기 함수로 작성하여 의도했던 바와 다르게 데이터가 아직 로드되지 않았음에도 코드가 실행되어 오류가 발생했습니다.
- 타입 지정 미흡
  - `likeData`가 배열이 아닐 경우에 대한 타입 지정을 하지 않아 타입 오류가 발생했습니다.
- 위의 문제들을 `likeData`의 타입을 명확히 하고, 배열인지 확인하는 로직을 추가하여 타입 안정성을 확보하여 해결했습니다.
- `useEffect` 훅 내에서 `likeData`가 배열인 경우에만 좋아요 수를 계산하고 정렬하도록 조건문을 추가하여 문제를 해결했습니다.
- `likeData`와 `posts`가 모두 로드된 후에만 상태를 업데이트를 수정하도록 하여 문제를 해결했습니다.

### 선지원

![image](https://github.com/user-attachments/assets/8152ffe4-df11-42a8-a035-c7f0c0f70d87)

- **게시글 상세 페이지에서 사용자가 댓글을 수정하면 댓글의 순서가 뒤바뀌는 오류 발생**
  - 문제 재현을 위해 여러 댓글을 수정해보고 문제를 확인했습니다. 어떤 문제가 발생했는지 확인하기 위해 get요청 route handler 코드와 tanstack query devtools를 검토해보고, 댓글을 수정하면 수정 시간(updated_at)이 정렬 순서에 영향을 미치는건지, 받아온 데이터를 sort해 리턴해주는 부분에서 잘못된 코드가 있었는지와 같은 가설을 설정하였습니다.
  - 가져온 값을 정렬한 다음 리턴하지 않고, supabase에서 제공하는 내장 메서드 .order()를 통해 정렬된 상태로 가져오도록 코드를 수정하여 문제를 해결하였습니다.

### 양이준

- **회원가입 시 중복된 이메일을 입력하더라도 완료 메시지가 출력되는 오류 발생**
  - 테스트 중 새로운 이메일 값을 입력해도 서버 에러가 계속해서 발생했습니다.
  - 문제의 원인은 새롭게 입력한 이메일 값을 users 테이블에서 찾은 결과, 일치하는 값이 없어 에러로 간주하고 서버 에러를 발생시킨 것으로 파악했습니다.
  - 이 문제들은 이메일 중복 입력을 체크하는 API 로직을 작성하여 문제를 해결했습니다.
  - 구체적으로는 PGRST116 에러가 발생하였는데, 단일 레코드 조회 시 조건에 맞는 레코드가 없다는 에러 내용이므로 이를 에러가 아닌 정상적인 상황으로 간주하고 false를 반환하도록 로직을 작성하여 해결했습니다.

### 이효현

- **렌더링 방식의 적절한 사용 미흡**
  - Next.js compile 시간에 대비하여 제가 정말 SSG/SSR/CSR 렌더링 방식을 잘 구분하여 코드를 작성하였는지 의문이 생겼고 개선 과제로 생각됩니다.

## 프로젝트를 끝낸 소감은 어떤가요?

### 박솔

- **점수 : 10점/10점**
- 원하는 기능을 전부 잘 구현했다고 생각합니다.
- 우리 팀을 기준으로 했을 때 원하던 기능과 페이지를 짧은 기간이었지만 전부 기간 내에 구현하였습니다.
- 하지만 제 개인을 기준으로 봤을 때는 아직 Next.js와 TypeScript에 대한 이해도가 높지는 않기에 기능이 문제없이 작동은 하지만 코드가 그다지 좋지 않은 것 같아 해당 부분이 많이 아쉽습니다.
- 오히려 그래서인지 협업을 통해 서로 부족한 부분을 채울 수 있다는 점을 느낄 수 있어 뜻깊은 프로젝트였던 것 같습니다.
- 시간이 부족하여 디테일한 부분을 놓친 부분이 많은 것 같아 해당 부분을 보완하면 좋을 것 같습니다.

### 김병준

- **점수 : 9점/10점**
- 와이어프레임 작성부터 일관성 있게 제대로 나오니, 모든 페이지에서 퀄리티 있으면서도 일관성이 있는 결과물이 나왔고 UI부터 기능까지 기획 단계에서 머릿속에 그리고 있던 페이지가 그대로 화면에 그려지게 되었습니다.
- 기획 단계에서 일주일의 시간 동안 너무 많은 작업량이 나오고 있는 것 같아 걱정이 앞섰지만, 최고의 팀원과 함께 하여 이게 실제로 기간 내에 완수될 것이라곤 생각도 못했다. 그러나 좋은 결과물이 나온 것 같아 만족스럽다.
- 일주일의 짧은 과제 기간이라 실제로 이 모든 것을 하긴 어렵지만, 이행하지 않더라도 연습 삼아 첫 기획 단계에서 개발 프레임워크, 패키지 등 사용 목적과 유지보수까지 고려한 기획을 하면 좋을 것 같다고 느꼈습니다.

### 김재훈

- **점수 : 10점/10점**
- 기획에 따라 큰 문제 없이 기능을 구현하였고, 멋지고 훌륭한 팀원분들을 만나 행운이라고 생각합니다. 짐 덩어리 같은 저를 데리고 이 멋진 프로젝트를 완성해낸 팀원들 모두를 리스펙합니다. 샤라웃 투 10조.
- 맡은 역할을 모두 완수해냈고, 소통에 있어서도 훌륭했던 우리 팀에게 주는 점수는 10점이지만 제 자신에게는 후하게 줘도 3점 밖에 주지 못할 것 같습니다. 
- 제가 생각하기에 다른 팀원분들의 분량에 비해 턱 없이 적었던 것 같은데 로직 보다는 CSS를 구현하느라 시간을 너무 많이 쓴 것 같습니다.
- 차라리 다른 팀원분이 메인 페이지를 제작하셨다면 훨씬 빨리 끝내고 조금 시간이 더 걸리는 기능에 붙어서 작업을 도와주셨을 것 같은 아쉬움이 남습니다.
- 아무래도 마감 기한이 있다보니 좌시한 부분들도 있고, 생략한 부분들도 없지 않아 있었는데 기한이 조금 더 길었다면 리팩토링 및 추가 기능을 구현하여 훨씬 더 완성도 높은 프로젝트가 만들어지지 않았을까 하는 생각이 들었습니다.

### 선지원

- **점수 : 10점/10점**
- 와이어프레임의 아이디어들이 모두 멋지게 구현됐습니다. 촉박한 시간 내에 프로젝트를 함께해주신 팀원분들께 감사합니다!
- route handler를 통해 Web요청 및 응답 API를 다루는 방법에 익숙해질 수 있었습니다. 서버 요청에 대한 최적화를 하지 못한 것 같아 아쉬운 점으로 남습니다. 
- 이전 프로젝트에서는 팀원분들께 많이 의지했지만, 맡은 부분인 댓글 CRUD 기능에 대해서 큰 도움없이 해내고 도전 과제였던 페이지네이션도 구현해냈기 때문에 개인적으로 많이 성장한 의미있는 프로젝트였다고 생각합니다.
- 노래 추천 글 작성시 사용자가 직접 노래에 대한 이미지를 첨부하고 설명을 추가하는데, 음악 관련 API를 사용해 데이터를 불러오고 1분 플레이어와 같은 기능을 추가한다면 프로젝트 주제에 걸맞는 완성도 높은 결과물을 낼 수 있을 것이라고 기대합니다.

### 양이준

- **점수 : 9점/10점**
- 전반적으로 구현하고자했던 기능은 모두 구현한 것 같습니다.
- 코드 리팩토링은 제대로 하지 못했지만 완성도가 높아 높은 점수를 부여했습니다.
- 매일 저녁 7시에 머지한 것. 막판에 머지하면 충돌이 많이 일어나는데 매일매일 머지 시간을 갖고 같이 오류를 해결해나가서 다음 작업이 수월했던 것 같습니다.
- Next.js로 구현은 했지만 이 방법이 맞는 것인지 아직 감이 잡히지는 않습니다. 
- Next.js를 사용해서 백엔드까지 경험할 수 있어 좋은 경험이었던 것 같습니다.
- 회원가입 시 이메일 중복이나, 비밀번호 조건이 맞지 않을 경우엔 조건에 맞을 때까지 경고 텍스트가 화면에 뜨도록 했는데, 계속해서 텍스트를 요청하는 것이 나중에는 많은 사용자가 사용할 경우 서버 과부하가 올 수 있을 것 같습니다.
- 리팩토링하게 된다면 중복체크 검사 버튼을 따로 만드는 로직으로 구현해보고싶습니다.

### 이효현

- **점수 : 6점/10점**
- 짧은 기한이었지만 팀 프로젝트를 기한 내에 완수하였습니다.
- 중복 코드가 있는 점은 아쉽습니다.
- 중복되는 파일을 분리할 점은 개선사항으로 보입니다.
- 데이터 캐싱을 하는 방법에서도 개선사항이 있을 것 같습니다.
