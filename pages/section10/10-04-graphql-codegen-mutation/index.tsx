import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";

const CREATEBOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _idcle
      number
      message
    }
  }
`;

export default function GraphQlMutatioArgsPage() {
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATEBOARD);

  const onClickCreateBoard = async () => {
    await createBoard({
      variables: {
        writer: "안녕",
        contents: "asdfasdfasdfasdfasdfasdf",
        title: "asdfasdf",
      },
    });
  };

  return (
    <div>
      <button onClick={onClickCreateBoard}>CREATEBOARD</button>
    </div>
  );
}
