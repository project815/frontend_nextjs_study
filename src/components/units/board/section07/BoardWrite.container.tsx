import { useMutation } from "@apollo/client";
import { useState } from "react";

import BoardWriteUI from "./BoardWrite.presenter";
import { CREATEBOARD } from "./BoardWrite.query";

export default function BoardWrite() {
  const [writer, setWriter] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const [createBoard] = useMutation(CREATEBOARD);

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
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
  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onChangeWrite={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChnageContents={onChangeContents}
    />
  );
}
