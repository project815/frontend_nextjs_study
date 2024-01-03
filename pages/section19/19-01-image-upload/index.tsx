import { gql, useMutation } from "@apollo/client";

import { useState } from 'react';
import type {
    IMutation,
    IMutationUploadFileArgs,
} from "../../../src/commons/types/generated2/types";

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
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOADFILE);

  const onChangeFile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0];
    console.log("file : ", file);

    const result = await uploadFile({ variables: { file } });

    console.log("result : ", result.data?.uploadFile.url);
    setImageUrl(result.data?.uploadFile.url ?? "");
  };
  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </>
  );
}
