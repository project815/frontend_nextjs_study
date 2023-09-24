import { useState } from "react";

export default function SignUpStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState();
  const [emailError, setEmailError] = useState();

  const onChnageEmail = (event) => {
    console.log("event : ", event);
    console.log("event.target :", event.target);
    console.log("event.target.value : ", event.target.value);

    setEmail(event.target.value);
  };

  const onChangePassWord = (event) => {
    setPassWord(event.target.value);
  };

  const onClickSignUp = () => {
    console.log(`email = ${email} : password = ${password}`);

    if (email.includes("@") === false) {
      //   alert("email이 잘못됨.");
      setEmailError("Email이 잘못된 형식임.");
      //   document.getElementById("error").innerText = "Email이 잘못된 형식임.";
    } else {
      alert("회원가입 완료");
      setEmailError("");
    }
  };
  return (
    <>
      이메일 : <input type="text" onChange={onChnageEmail} />
      {/* <div id="error"></div> */}
      <div>{emailError}</div>
      비밀번호 : <input type="passwort" onChange={onChangePassWord} />
      <button onClick={onClickSignUp}>회원가입</button>
    </>
  );
}
