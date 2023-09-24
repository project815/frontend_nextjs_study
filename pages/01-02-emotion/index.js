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
} from "../../styles/emotion";

export default function EmotionPage() {
  //자바스크립트 쓰는 곳
  //
  return (
    <>
      <Content>
        <Tittle>게시물 등록</Tittle>
        <UserInfo>
          <InputUser>
            <div>작성자</div>
            <Input type="text" />
          </InputUser>
          <InputPw>
            <div>비밀번호</div>
            <Input type="text" />
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
            <input type="radio" /> 유튜브
            <input type="radio" /> 사진
          </div>
        </ContentInfo>
        <button type="button">등록하기</button>
      </Content>

      <Email>이메일</Email>
      {/* <Input type="text" /> */}
      <button type="button">클릭하세요!!</button>
      <img src="/vercel.png" />
    </>
  );
}
