import { useRef, useState } from "react";

import {
  InputRowGroup,
  QuizLayOut,
  InputColumnGroup,
  Error,
} from "../../../src/styles/02-quiz";

export default function Section02QuizPage() {
  const elementText: string = "안녕하세요.";
  const elementCount: number = 0;
  let elementAuthNumber: string = "000000";

  const [stateText, setstateText] = useState<string>("안녕하세요.");
  const [stattCount, setStateCount] = useState<number>(0);
  const [stateAuthNumber, setStateAuthNumber] = useState<string>("000000");
  console.log("stateAuthNumber : ", stateAuthNumber);
  const authNumber = useRef("000000");

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<string>("Error");
  const [passwordError, setPasswordError] = useState<string>("Error");

  // element
  const onClickTextElementById = () => {
    const element = document.getElementById("elementtext");

    if (element) {
      element.innerText = "반갑습니다.";
    }
  };
  const onClickCountElementById = () => {
    const element = document.getElementById("elementtext");
    if (element) {
      const num = Number(element.innerText) + 1;
      element.innerText = String(num);
    }
  };
  const onChangeAuthNumberElementById = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    elementAuthNumber = e.target.value;
  };
  const onClickAuthNumberElementById = () => {
    if (!elementAuthNumber) {
      elementAuthNumber = "000000";
    }
    const element = document.getElementById("elementauthnumber");
    if (element) {
      element.innerText = elementAuthNumber;
    }
  };

  // UseState
  const onClickStateChange = () => {
    setstateText("반갑습니다.");
  };
  const onClikckStateCount = () => {
    setStateCount(stattCount + 1);
  };
  // useRef
  const onChangeStateAuthNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    authNumber.current = e.target.value;
  };
  const onClickStateAuthNumber = () => {
    setStateAuthNumber(authNumber.current);
  };
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onChangeCheckPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(e.target.value);
  };
  const onSubmitInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.includes("@") || !password || !(password === checkPassword)) {
      if (!email.includes("@")) {
        setEmailError("이메일에 @가 없습니다.");
      }
      if (!password) {
        setPasswordError("비밀번호를 입력해주세요.");
      }
      if (!(password === checkPassword)) {
        setPasswordError("비밀번호가 일치하지 않습니다.");
      }

      console.log("??");
      return;
    } else {
      setEmailError("");
      setPasswordError("");
    }

    console.log(
      `email : ${email}, password : ${password}, checkPassword : ${checkPassword}`
    );
  };

  return (
    <div>
      <h2>1. state를 활용하여 안녕하세요 ⇒ 반갑습니다 로 변경하기</h2>
      <div>1 - 1. let과 document.getElementById()를 사용해 주세요.</div>
      <div id="elementtext">{elementText}</div>
      <button onClick={onClickTextElementById}>클릭</button>

      <div>1 - 2. state를 사용해 주세요.</div>
      <div>{stateText}</div>
      <button onClick={onClickStateChange}>클릭</button>

      <h2>2. state를 활용하여 카운터 만들기</h2>
      <div>2 - 1. let과 document.getElementById()를 사용해 주세요.</div>
      <div id="elementcount">{elementCount}</div>
      <button onClick={onClickCountElementById}>클릭</button>
      <div>2 - 2. state를 사용해 주세요.</div>
      <div>{stattCount}</div>
      <button onClick={onClikckStateCount}>클릭</button>

      <h2>3. state를 활용하여 인증번호 생성하기</h2>
      <div>3 - 1. let과 document.getElementById()를 사용해 주세요.</div>
      <div id="elementauthnumber">{elementAuthNumber}</div>
      <input
        type="text"
        onChange={onChangeAuthNumberElementById}
        pattern="[0-9]{6}"
        minLength={6}
        maxLength={6}
        required
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          (e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 6))
        }
      />
      <button onClick={onClickAuthNumberElementById}>클릭</button>
      <div>3 - 2. state를 사용해 주세요.</div>
      <div>{authNumber.current}</div>
      <input
        type="text"
        onChange={onChangeStateAuthNumber}
        pattern="[0-9]{6}"
        minLength={6}
        maxLength={6}
        required
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          (e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 6))
        }
      />
      <button onClick={onClickStateAuthNumber}>클릭</button>

      <h2>4. state를 활용하여 회원가입 폼 만들기</h2>
      <div>
        <ul>
          <li>4-1. state를 사용해 주세요.</li>
          <li>
            4-2. 가입하기 버튼을 누르면 조건문을 활용하여 에러를 검증해 주세요.
          </li>
          <ul>
            <li>조건1. 이메일에 @가 없으면 에러입니다.</li>
            <li>조건2. 비밀번호와 비밀번호확인이 다르면 에러입니다.</li>
            조건3. 에러가 없는 입력에 해당하는 state는 에러를 제거(빈값으로
            변경) 합니다.
          </ul>
          <li>4-3. 발생한 에러를 빨간색으로 입력창 하단에 표기해 주세요.</li>
        </ul>
      </div>

      <QuizLayOut onSubmit={onSubmitInfo}>
        <InputRowGroup>
          <span>이메일 : </span>
          <InputColumnGroup>
            <input type="text" onChange={onChangeEmail} />
            <Error>{emailError}</Error>
          </InputColumnGroup>
        </InputRowGroup>
        <InputRowGroup>
          <span>비밀번호 : </span>

          <InputColumnGroup>
            <input type="password" onChange={onChangePassword} />
            <Error>{passwordError}</Error>
          </InputColumnGroup>
        </InputRowGroup>
        <InputRowGroup>
          <span>비밀번호 확인 : </span>
          <input type="password" onChange={onChangeCheckPassword} />
        </InputRowGroup>
        <button type="submit">회원가입</button>
      </QuizLayOut>

      <h2>5. 고난도. 잇츠로드 </h2>
    </div>
  );
}
