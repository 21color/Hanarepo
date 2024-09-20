{
  /*로그인 페이지: 사용자 인증 및 회원가입 기능.
회원가입 페이지: 새로운 사용자를 등록하는 페이지.
마이페이지: 사용자의 프로필, 읽은 책, 관심 장르 등을 관리하는 페이지.
도서 목록 및 검색 페이지: 사용자들이 원하는 책을 검색하고, 추천 도서를 볼 수 있는 페이지.
북 클럽 페이지: 클럽 목록과 실시간 채팅(WebSocket을 활용)을 제공하는 페이지.
도서 목표 관련 페이지: 사용자들이 읽고 싶은 책 목록을 추가하고, 목표를 설정하며 관리하는 페이지.
베스트셀러 페이지: 현재 인기 있는 베스트셀러 목록을 확인할 수 있는 페이지.
신간 정보 페이지: 새로 출간된 책을 보여주는 페이지.
*/
}

export const ROUTE = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  MY_PAGE: "/myPage",
  BOOK_LIST: "/bookList",
  BOOK_CLUB: "/bookClub",
  BOOK_TARGET: "/bookTarget",
  BEST_SELLER: "/bestSeller",
  NEW_BOOK: "/newBook",
} as const;
