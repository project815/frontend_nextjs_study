import { gql, useMutation } from "@apollo/client";

const CREATEBOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphQlMutatioArgsPage() {
  const [createBoard] = useMutation(CREATEBOARD);

  const onClickCreateBoard = async () => {
    const result = await createBoard({
      variables: {
        writer: "안녕",
        title: "asdfasdfasdfsadf",
        contents: "반갑습니다",
      },
    });
    console.log("data : ", result);
  };

  return (
    <div>
      <button onClick={onClickCreateBoard}>CREATEBOARD</button>
    </div>
  );
}
