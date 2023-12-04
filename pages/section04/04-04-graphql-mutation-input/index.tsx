import { gql, useMutation } from "@apollo/client";
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

export default function GraphQlMutationInputPage() {
  const [writer, setWriter] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const [createBoard] = useMutation(CREATEBOARD);

  const onClickCreateBoard = async () => {
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
    <div>
      작성자 : <input type="text" onChange={onChangeWriter} />
      작성자 : <input type="text" onChange={onChangeTitle} />
      작성자 : <input type="text" onChange={onChangeContents} />
      <button onClick={onClickCreateBoard}>CREATEBOARD</button>
    </div>
  );
}
