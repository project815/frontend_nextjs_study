import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { CREATEBOARD } from "./BoardWrite.query";
import BoardWriteUI from "./BoardWrite.presenter";

export default function BoardWrite() {
  //자바스크립트 영역
  const [createBoard] = useMutation(CREATEBOARD);
  const [isfill, setIsFill] = useState<boolean>(false);
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

  useEffect(() => {
    if (
      info.contents.length > 0 &&
      info.title.length > 0 &&
      info.writer.length > 0
    ) {
      setIsFill(true);
    } else {
      setIsFill(false);
    }
  }, [info]);

  //HTML 영역
  return (
    <>
      <div>eeeeeeee</div>
      <BoardWriteUI
        isfill={isfill}
        onClickSubmit={onClickSubmit}
        setInfo={setInfo}
      />
    </>
  );
}
``;
