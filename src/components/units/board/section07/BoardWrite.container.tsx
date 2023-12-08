import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";

import BoardWriteUI from "./BoardWrite.presenter";
import { CREATEBOARD } from "./BoardWrite.query";

export default function BoardWrite() {
  const [isActive, setIsActive] = useState<boolean>(false);
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
    console.log("writer : ", writer);
    e.target.value && title && contents
      ? setIsActive(true)
      : setIsActive(false);
  };
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    writer && e.target.value && contents
      ? setIsActive(true)
      : setIsActive(false);
  };
  const onChangeContents = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
    writer && title && e.target.value ? setIsActive(true) : setIsActive(false);
  };

  // useEffect(() => {
  //   console.log(`writer : ${writer}, title : ${title}, contents : ${contents}`);
  //   if (writer && title && contents) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // }, [writer, title, contents]);

  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isActive={isActive}
    />
  );
}
