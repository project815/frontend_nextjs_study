import { useMutation } from "@apollo/client";
import { useState } from "react";

import BoardWriteUI from "./BoardWrite.presenter";
import { CREATEBOARD, UPDATEBOARD } from "./BoardWrite.query";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const { isEdit } = props;
  const router = useRouter();

  const [writer, setWriter] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const [createBoard] = useMutation(CREATEBOARD);
  const [updateBoard] = useMutation(UPDATEBOARD);

  const onClickSubmit = async () => {
    try {
      const result = await createBoard({
        variables: {
          writer: writer,
          title: title,
          contents: contents,
        },
      });
      router.push(`/section09/09-03-boards/${result.data.createBoard.number}`);
    } catch (err) {
      console.log(err);
    }
  };

  const onClickUpdate = async () => {
    try {
      const result = await updateBoard({
        variables: {
          number: Number(router.query.number),
          writer: writer,
          title: title,
          contents: contents,
        },
      });
      router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`);
    } catch (err) {
      console.log(err);
    }
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
      onClick={isEdit ? onClickUpdate : onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isEdit={isEdit}
    />
  );
}
