import { useState } from "react";
import {
  Address,
  ButtonWrapper,
  Contents,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  UploadButton,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
  Error,
} from "../../styles/emotion_origin";

export default function BoardWriteUI() {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    password: "",
  });

  const [userInfoError, setUserInfoError] = useState({
    userName: "",
    password: "",
  });

  const [content, setContent] = useState({
    contentTitle: "",
    content: "",
    address: "",
    youtubeurl: "",
    image: "",
    setting: "",
  });

  const [contentError, setContentError] = useState({
    contentTitle: "",
    content: "",
    address: "",
    youtubeurl: "",
    image: "",
    setting: "",
  });

  const onChangeUserName = (data) => {
    const newUserName = data.target.value;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      userName: newUserName,
    }));
    setUserInfoError((prev) => ({
      ...prev,
      userName: "",
    }));
  };

  const onChangeUserPassword = (data) => {
    const newUserName = data.target.value;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      password: newUserName,
    }));
    setUserInfoError((prev) => ({
      ...prev,
      password: "",
    }));
  };

  const onChangeContentTitle = (data) => {
    const newUserName = data.target.value;
    setContent((prevUserInfo) => ({
      ...prevUserInfo,
      contentTitle: newUserName,
    }));
    setContentError((prev) => ({
      ...prev,
      contentTitle: "",
    }));
  };

  const onChangeContent = (data) => {
    const newUserName = data.target.value;
    setContent((prevUserInfo) => ({
      ...prevUserInfo,
      content: newUserName,
    }));
    setContentError((prev) => ({
      ...prev,
      content: "",
    }));
  };

  const onClickInfo = () => {
    console.log("실행");
    if (userInfo.userName === "") {
      console.log("비어있음.");
      setUserInfoError((prevUserInfoError) => ({
        ...prevUserInfoError,
        userName: "유저의 이름을 지정해주세요.",
      }));
    }
    if (userInfo.password === "") {
      setUserInfoError((prevUserInfoError) => ({
        ...prevUserInfoError,
        password: "비밀번호를 지정해주세요.",
      }));
    }
    if (content.contentTitle === "") {
      setContentError((prevUserInfoError) => ({
        ...prevUserInfoError,
        contentTitle: "콘텐츠의 제목을 입력해주세요.",
      }));
    }
    if (content.content === "") {
      setContentError((prevUserInfoError) => ({
        ...prevUserInfoError,
        content: "콘텐츠의 내용을 입력해주세요.",
      }));
    }
  };

  return (
    <Wrapper>
      <Title>게시글 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={onChangeUserName}
          />
          <Error>{userInfoError.userName}</Error>
        </InputWrapper>{" "}
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            type="password"
            placeholder="비밀번호를 작성해주세요."
            onChange={onChangeUserPassword}
          />
          <Error>{userInfoError.password}</Error>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={onChangeContentTitle}
        />
        <Error>{contentError.contentTitle}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          placeholder="내용을 작성해주세요."
          onChange={onChangeContent}
        />
        <Error>{contentError.content}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube placeholder="링크를 복사해주세요." />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton onClick={onClickInfo}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
