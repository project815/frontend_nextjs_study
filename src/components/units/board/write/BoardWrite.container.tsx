import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { CREATEBOARD } from "./BoardWrite.query";
import BoardWriteUI from "./BoardWrite.presenter";

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
      <div>eeeeeeee</div>
      <BoardWriteUI onClickSubmit={onClickSubmit} setInfo={setInfo} />
    </>
  );
}
``;
