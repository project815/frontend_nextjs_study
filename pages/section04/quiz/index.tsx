import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const CREATEBOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function Section04Quiz() {
  const [createBoard] = useMutation(CREATEBOARD);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickFetchProfile = async () => {
    const result = await createBoard({
      variables: { writer, title, contents },
    });
    console.log("data : ", result);
  };

  const onChangeWriter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };
  //## 1. GRAPHQL-API 요청하기

  // 1. [ GRAPHQL-API 요청하기 ] 라는 버튼을 만들고, 이 버튼을 클릭했을 때
  // createBoard 라는 API에 mutation을 요청해서 프로필을 등록해 보세요.(작성자, 제목, 내용은 하드코딩합니다.)
  // 2. 위 1번에서 등록한 데이터를 console.log()로 출력해 보세요.
  // 3. 위 1번에서 등록한 데이터를 playground에서 fetchBoard 를 요청해서 정말 등록이 되었는지 확인해 보세요.
  // 4. 위 1번의 과정을 하드코딩 하지 않고,  작성자, 제목, 내용에 대해서 <input /> 태그와 state를 각각 만들고, 직접 입력 받은 작성자, 제목, 내용으로 mutation을 요청해 주세요.
  // 5. 위 4번에서 등록한 데이터를 console.log()로 출력해 보세요.
  // 6. 위 4번에서 등록한 데이터를 playground에서 fetchBoard를 요청해서 정말 등록이 되었는지 확인해 보세요.
  // 7. 위 5~6번에 대한 과정을 createProduct에 대해서 동일하게 진행해 보세요.

  //     ## 2. REST-API 요청과 비동기 처리

  // 1. [ REST-API 요청하기 ] 라는 버튼을 만들고, 이 버튼을 클릭했을 때 https://koreanjson.com/users 라는 Endpoint에 get 방식으로 요청하여 데이터를 받아보세요.
  // 2. 위 1번에서 받은 데이터를 console.log()로 출력해 보세요.
  // (혹시, Promise 라고 나오나요? 그렇다면 async/await로 기다려야겠죠??)
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", width: "200px" }}>
        <div>
          <span>작성자</span> <input onChange={onChangeWriter} />
        </div>
        <div>
          제목 <input onChange={onChangeTitle} />
        </div>
        <div>
          내용 <input onChange={onChangeContents} />
        </div>
      </div>

      <button onClick={onClickFetchProfile}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
