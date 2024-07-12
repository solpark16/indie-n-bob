# Indie N Bob

![CleanShot 2024-07-12 at 22 15 10](https://github.com/user-attachments/assets/1468c0a5-4070-4f3b-af24-a4bbb1d24db3)

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

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/node.js-5fa84e?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
<img src="https://img.shields.io/badge/figma-E34f26?style=for-the-badge&logo=figma&logoColor=white">
<img src="https://img.shields.io/badge/tailwindCSS-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white">
<img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/supabase-3fcf8e?style=for-the-badge&logo=supabase&logoColor=white">
<img src="https://img.shields.io/badge/axios-5a29e4?style=for-the-badge&logo=axios&logoColor=white">
<img src="https://img.shields.io/badge/tanstackquery-ff4154?style=for-the-badge&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/.env-ecd53f?style=for-the-badge&logo=.env&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=기술스택아이콘&logoColor=white">
<img src="https://img.shields.io/badge/json-000000?style=for-the-badge&logo=json&logoColor=white">
<img src="https://img.shields.io/badge/slack-4a154b?style=for-the-badge&logo=slack&logoColor=white">
<img src="https://img.shields.io/badge/markdown-000000?style=for-the-badge&logo=markdown&logoColor=white">
<img src="https://img.shields.io/badge/eslint-4b32c3?style=for-the-badge&logo=eslint&logoColor=white">
<img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">


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
      <td align="center"><a href="https://github.com/ejunyang"><img src="https://cdn.imweb.me/upload/S202207215f9bbbf5e9735/a4c1af2bfa743.jpg" width="200px;" height="200px;" alt="image"/><br /><b>팀원 :양이준</b></sub></a><br /></td>
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

### 팀원 : 선지원

- 댓글 리스트 렌더링 페이지 
  - 최신순 정렬 기능 구현
  - 페이지네이션 구현 : 사용자가 댓글 리스트에 대해 GET 요청 시 query string으로 limit 값과 offset 값을 전달하여 페이지 당 5개의 댓글을 가져오도록 구현
- 댓글 기능 구현 (CRUD)
  - 댓글 작성 시 댓글 작성자의 인증 정보를 supabase auth 스키마에서 불러와 comments 데이터 테이블에 insert 하도록 구현
  - 댓글 삭제 시 댓글 삭제 요청을 보낸 사용자의 인가 여부를 검증하는 API 로직 작성

### 팀원 : 양이준

- 와이어 프레임 작성 리딩

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
      <td align="center"><a href="https://github.com/user-attachments/assets/73cd077b-b0ec-4dba-8c2a-e78fc2e512f5"><img src="https://github.com/user-attachments/assets/73cd077b-b0ec-4dba-8c2a-e78fc2e512f5" width="300px;" height="300px;" alt="image"/><br /><b>PR 코드 리뷰</b></sub></a><br /></td>
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