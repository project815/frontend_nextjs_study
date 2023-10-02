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
} from "../../src/styles/emotion_origin";
import { gql, useMutation } from "@apollo/client";

interface CreateBoardInput {
  writer: string;
  password: string;
  title: string;
  contents: string;
  youtubeUrl: string;
  boardAddress: {
    zipcode: string;
    address: string;
    addressDetail: string;
  };
  images: string;
}

const CREATEBOARD = gql`
  # Write your query or mutation here
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      boardAddress {
        _id
        createdAt
        updatedAt
      }
      user {
        _id
        email
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export default function BoardWriteUI() {
  const [createBoard] = useMutation(CREATEBOARD);

  const [userInfo, setUserInfo] = useState<CreateBoardInput>({
    writer: "",
    password: "",
    title: "",
    contents: "",
    youtubeUrl: "",
    boardAddress: {
      zipcode: "",
      address: "",
      addressDetail: "",
    },
    images: "",
  });

  const [userInfoError, setUserInfoError] = useState<CreateBoardInput>({
    writer: "",
    password: "",
    title: "",
    contents: "",
    youtubeUrl: "",
    boardAddress: {
      zipcode: "",
      address: "",
      addressDetail: "",
    },
    images: "",
  });

  const onChangeUserWriter = (data) => {
    const newUserName = data.target.value;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      writer: newUserName,
    }));
    setUserInfoError((prev) => ({
      ...prev,
      writer: "",
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
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      title: newUserName,
    }));
    setUserInfoError((prev) => ({
      ...prev,
      title: "",
    }));
  };

  const onChangeContent = (data) => {
    const newUserName = data.target.value;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      contents: newUserName,
    }));
    setUserInfoError((prev) => ({
      ...prev,
      content: "",
    }));
  };

  const onClickInfo = async () => {
    console.log("click");
    if (!userInfo.writer) {
      setUserInfoError((prevUserInfoError) => ({
        ...prevUserInfoError,
        writer: "유저의 이름을 지정해주세요.",
      }));
    }
    if (!userInfo.password) {
      setUserInfoError((prevUserInfoError) => ({
        ...prevUserInfoError,
        password: "비밀번호를 지정해주세요.",
      }));
    }
    if (!userInfo.title) {
      setUserInfoError((prevUserInfoError) => ({
        ...prevUserInfoError,
        title: "콘텐츠의 제목을 입력해주세요.",
      }));
    }
    if (!userInfo.contents) {
      setUserInfoError((prevUserInfoError) => ({
        ...prevUserInfoError,
        contents: "콘텐츠의 내용을 입력해주세요.",
      }));
    }
    if (
      userInfo.writer &&
      userInfo.password &&
      userInfo.title &&
      userInfo.contents
    ) {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: userInfo.writer,
            password: userInfo.password,
            title: userInfo.title,
            contents: userInfo.contents,
          },
        },
      })
        .then((res) => {
          console.log("res : ", res);
          alert("컨텐츠가 등록되었습니다.");
        })
        .catch((err) => {
          console.log("error : ", err);
        });

      console.log("result : ", result);
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
            onChange={onChangeUserWriter}
          />
          <Error>{userInfoError.writer}</Error>
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
        <Error>{userInfoError.title}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          placeholder="내용을 작성해주세요."
          onChange={onChangeContent}
        />
        <Error>{userInfoError.contents}</Error>
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
