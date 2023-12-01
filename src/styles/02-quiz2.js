import styled from "@emotion/styled";

export const Quiz2LayOut = styled.form`
  width: 640px;
  height: 1138px;
  display: flex;
  position: relative;
  background-color: #000000;
  flex-direction: column;
  align-items: center;
`;

export const Quiz2ChildLayOut1 = styled.div`
  width: 640px;
  height: 50%;
  display: flex;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Quiz2ChildLayOut2 = styled.div`
  width: 600px;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const QuizTitle = styled.h1`
  display: flex;
  color: white;
  position: relative;
`;

export const SingInput = styled.input`
  position: relative;
  width: 100%;
  height: 45px;
  font-size: 30px;
  background-color: rgba(255, 255, 255, 0);
  border: none; /* 모든 테두리 초기화 */

  border-bottom: 1px solid #fff;

  color: #fff;

  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SubButton = styled.button`
  background-color: rgba(1, 1, 1, 0);
  border: none;

  color: #fff;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const LoginButton = styled.button`
  position: relative;
  width: 80%;
  height: 80px;
  border-radius: 40px;
  box-sizing: border-box;
  border: 1px solid #000000;
  background-color: rgba(255, 27, 109, 0.6);
  font-size: 30px;
  &:hover {
    background-color: rgba(255, 27, 109, 1); /* 호버 시의 배경색 */
    cursor: pointer; /* 호버 시 커서를 포인터로 변경합니다. */
  }

  &:active {
    background-color: rgba(255, 27, 109, 0.8); /* 클릭 시의 배경색 */
    /* 클릭 시의 추가 스타일링 속성들을 여기에 추가할 수 있습니다. */
  }
`;

export const LoginText = styled.span`
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  z-index: 1000;
  opacity: 1;
  position: relative;
`;

export const KakaoLoginButton = styled.button`
  border-radius: 38px;
  border: 2px solid #fae100;
  background-color: rgba(255, 255, 255, 0);
  position: relative;
  width: 80%;
  height: 80px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; /* 버튼에 대한 기본 커서 스타일을 추가합니다. */
  transition: background-color 0.3s ease, border-color 0.3s ease; /* 애니메이션 효과를 추가합니다. */

  &:hover {
    background-color: rgba(255, 255, 255, 0.2); /* 호버 시의 배경색 */
    border-color: #ffffff; /* 호버 시의 테두리 색상 */
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.4); /* 클릭 시의 배경색 */
    border-color: #ffffff; /* 클릭 시의 테두리 색상 */
    /* 클릭 시의 추가 스타일링 속성들을 여기에 추가할 수 있습니다. */
  }
`;
export const KakaoLoginText = styled.span`
  color: #ffe100;
  font-family: Noto Sans KR;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 10px;
`;
