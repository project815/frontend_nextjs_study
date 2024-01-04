import { gql, useMutation } from "@apollo/client";

import { useRef, useState } from "react";
import type {
  ICreateBoardInput,
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated2/types";
import { CheckValidationFile } from "../../../src/utility/vakudation";
const CREATEBOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
    }
  }
`;
const UPLOADFILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      _id
      size
      url
      isUsed
      createdAt
    }
  }
`;

export default function ImageUploadPage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOADFILE);

  const onChangeFile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0];

    const isValid = CheckValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({ variables: { file } });

    console.log("result : ", result.data?.uploadFile.url);
    setImageUrl(result.data?.uploadFile.url ?? "");

    setCreateBoardInput((prev) => ({
      ...prev,
      images: [result.data?.uploadFile.url ?? ""],
    }));
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  // ----------------------------------------------------------------

  // const [writer, setWriter] = useState<string>("");
  // const [title, setTitle] = useState<string>("");
  // const [contents, setContents] = useState<string>("");
  const [createBoardInput, setCreateBoardInput] = useState<ICreateBoardInput>({
    writer: "",
    title: "",
    contents: "",
    images: [],
    password: "1234",
  });

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATEBOARD);

  const onClickCreateBoard = async (): Promise<void> => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput,
        },
      });
      console.log("data : ", result);
    } catch (error) {
      console.log("error : ", error);
    }
  };

  const onChangeBoardInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateBoardInput((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <div
        style={{ width: "150px", height: "150px", backgroundColor: "gray" }}
        onClick={onClickImage}
      >
        이미지 선택
      </div>
      <input
        type="file"
        onChange={onChangeFile}
        style={{ display: "none" }}
        ref={fileRef}
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
      <div>
        <div>
          작성자 :{" "}
          <input type="text" id="writer" onChange={onChangeBoardInput} />
        </div>
        <div>
          제목 : <input type="text" id="title" onChange={onChangeBoardInput} />
        </div>
        <div>
          내용 :{" "}
          <input type="text" id="contents" onChange={onChangeBoardInput} />
        </div>

        <button onClick={onClickCreateBoard}>등록하기</button>
      </div>
    </>
  );
}
