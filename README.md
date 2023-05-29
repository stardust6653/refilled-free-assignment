# Refilled Free Assginment

✔️사전 과제 진행 시 중요사항 꼭 읽어보세요!

Next.js를 사용해주셔야 합니다. 버전은 11이상이면 됩니다 :) <br/>
SCSS를 사용해주셔야 합니다.<br/>
font는 전부 Noto Sans KR로 통일합니다. 그 외 css는 디자인과 동일하게 진행해주세요.<br/>
redux / redux-toolkit / react-query 중 최소 1개를 사용해주셔야 합니다.<br/>
코드는 본인 github에 반드시 public으로 설정하셔서 올려주셔야 합니다.<br/>
branch는 다음과 같이 사용해주세요.<br/>
main : 개발이 완료되면 main으로 PR을 날려주세요! (main으로 바로 합치지 말아주세요.)<br/>
feature/test : 해당 브랜치에서 개발을 진행해주시고 push해주세요!<br/>
즉, 레포에 main, feature/test 이렇게 2개의 브랜치가 있으면 됩니다.<br/>
타인의 도움을 받거나, 타인의 코드를 복사할 경우 불합격 처리가 됩니다.<br/>

---

사용 스택

1. Next.js 12버전

- 13버전으로 오면서 app dir로 바뀌어 12버전과 많은 부분에서 달라졌습니다. RSC의 적극적인 활용이나 폴더-파일으로 구성된 기존의 라우팅 방식이 폴더 단위로 바뀐 점, 렌더링 방식이 페이지에서 컴포넌트로 바뀐 점 등 상당히 많은 부분에서 달라졌기 때문에, 실제 프로덕트라면 안정성을 고려해 개발할 것 같아 12버전을 사용합니다.

2. redux-toolkit

- 장바구니 내 물품 수량을 관리하는 용도로 Redux-toolkit의 사용을 고려하였으며, 클라이언트 내 데이터 만을 다룰 것이므로 toolkit을 활용하는 것이면 충분하다 판단하여 사용합니다.

---

스택 요구 사항

- [x] Next.js 사용
- [x] SCSS 사용
- [x] Redux-toolkit 활용

---

추가 기능 고려 사항

- [x] 장바구니 갯수 뱃지
- [x] 옵션 미선택 시 알림 팝업
- [x] 장바구니 담기 시 알림 팝업
- [x] 장바구니에 담겨있는 물품 담기 시 이미 담겨있음을 알리는 팝업(중복 상품 추가 막기)
