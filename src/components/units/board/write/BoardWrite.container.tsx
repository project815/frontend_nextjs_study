import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";

const CREATEBOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      message
      number
    }
  }
`;

export default function BoardWrite() {
  //자바스크립트 영역
  const [createBoard] = useMutation(CREATEBOARD);

  const [info, setInfo] = useState({ writer: "", title: "", contents: "" });
  const onClickSubmit = async (event) => {
    console.log("실행");
    event.preventDefault();
    const result = await createBoard({
      variables: {
        // variables $역할
        writer: info.writer,
        title: info.title,
        contents: info.contents,
      },
    });

    alert(result.data.createBoard.message);
  };

  useEffect(() => {
    console.log("info : ", info);
  }, [info]);
  //HTML 영역
  return (
    <>
      <BoardWriteUI onClickSubmit={onClickSubmit} setInfo={setInfo} />
    </>
  );
}
