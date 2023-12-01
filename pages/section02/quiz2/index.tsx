import Image from "next/image";
import {
  Sectino02_KakaoIcon,
  Section02_BG,
  Section02_Icon,
  Section02_InputIcon,
} from "../../../public/assets";
import {
  Quiz2LayOut,
  QuizTitle,
  Quiz2ChildLayOut1,
  Quiz2ChildLayOut2,
  SingInput,
  SubButton,
  LoginButton,
  LoginText,
  KakaoLoginButton,
  KakaoLoginText,
} from "../../../src/styles/02-quiz2";

const test = () => {
  console.log("click");
};
export default function Section02Quiz2Page() {
  return (
    <div>
      <Quiz2LayOut>
        <Image
          style={{ position: "absolute" }}
          alt=""
          width={640}
          height={1138}
          src={Section02_BG}
        />
        <Quiz2ChildLayOut1>
          <Image style={{ position: "relative" }} src={Section02_Icon} alt="" />
          <QuizTitle>잇츠로드</QuizTitle>
        </Quiz2ChildLayOut1>
        <Quiz2ChildLayOut2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <SingInput />
              <div
                style={{
                  position: "relative",
                  color: "#FF1B6D",
                  marginTop: "8px",
                  fontFamily: "Noto Sans KR",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                이메일 주소를 다시 확인해주세요.
              </div>
            </div>

            <Image
              alt=""
              src={Section02_InputIcon}
              style={{ position: "relative" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <SingInput />
              <div
                style={{
                  position: "relative",
                  color: "#FF1B6D",
                  marginTop: "8px",
                }}
              >
                8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.
              </div>
            </div>

            <Image
              alt=""
              src={Section02_InputIcon}
              style={{ position: "relative" }}
            />
          </div>
          <LoginButton onClick={test}>
            <LoginText>로그인</LoginText>
          </LoginButton>
          <div style={{ position: "relative", color: "white" }}>
            <SubButton>이메일 찾기</SubButton> |{" "}
            <SubButton>비밀번호 찾기</SubButton> |{" "}
            <SubButton>회원가입</SubButton>
          </div>
          <KakaoLoginButton style={{ position: "relative" }}>
            <Image src={Sectino02_KakaoIcon} alt="" />
            <KakaoLoginText>카카오톡으로 로그인</KakaoLoginText>
          </KakaoLoginButton>
        </Quiz2ChildLayOut2>
      </Quiz2LayOut>
    </div>
  );
}
