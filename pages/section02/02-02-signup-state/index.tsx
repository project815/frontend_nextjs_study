import React, { useState } from "react";

export default function SignUpStatePage() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const [emailError, setEmailError] = useState<string>("");

  const onClickkSignUp = () => {
    if (email && !email.includes("@")) {
      setEmailError("잘못된 형식의 이메일입니다.");
    } else {
      setEmailError("");
      alert("회원가입이 완료되었습니다.");
    }
    console.log(password);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      <div>{emailError}</div>
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickkSignUp}>회원가입</button>
    </div>
  );
}
