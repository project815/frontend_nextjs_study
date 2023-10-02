import {
  Tittle,
  Email,
  Input,
  Content,
  UserInfo,
  ContentInfo,
  InputContent,
  InputUser,
  InputPw,
} from "../../src/styles/emotion";

import { useForm } from "react-hook-form";

export default function EmotionPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmitData = (data) => {
    // 폼 데이터를 검증
    console.log(data);

    if (!data.userName) {
      alert("모든 필드를 입력하세요.");
    } else {
      // 데이터를 서버로 전송하거나 다른 작업을 수행할 수 있음
    }
  };

  return (
    <>
      <Content onSubmit={handleSubmit(onSubmitData)}>
        <Tittle>게시물 등록</Tittle>
        <UserInfo>
          <InputUser>
            <div>작성자</div>
            <Input
              type="text"
              {...register("userName", { required: "This is required" })}
              aria-invalid={errors.userName ? "true" : "false"}
              placeholder={
                errors.userName?.type === "required"
                  ? "작성자 이름이 다시 작성되지 않았습니다."
                  : "작성자 이름을 작성해주세요."
              }
            />
          </InputUser>

          <InputPw>
            <div>비밀번호</div>
            <Input
              type="passward"
              {...register("passward", {
                required: "This is required",
                minLength: { value: 4, message: "min Length 4" },
              })}
            />
          </InputPw>
        </UserInfo>

        <ContentInfo>
          <div>
            <div>제목</div>
            <Input type="text" />
          </div>
          <div>
            <span>내용</span>
            <InputContent type="text" />
          </div>
          <div>
            <div>주소</div>
            <div>
              <Input type="text" />
              <button>우편번호 검색</button>
            </div>
            <Input type="text" />
            <Input type="text" />
          </div>
          <div>
            <div>유튜브</div>
            <Input type="text" />
          </div>

          <div>
            <div>사진 첨부</div>
            <div>
              <img src="../../public/assets/picture.png"></img>
              <img src="../../public/assets/picture.png"></img>
              <img src="../../public/assets/picture.png"></img>
            </div>
          </div>

          <div>
            <div>메인 설정</div>
            <input type="radio" name="file" /> 유튜브
            <input type="radio" name="file" /> 사진
          </div>
        </ContentInfo>
        <button type="submit">등록하기</button>
      </Content>
    </>
  );
}
