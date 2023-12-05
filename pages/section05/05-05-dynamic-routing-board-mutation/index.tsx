import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [createBoard] = useMutation(CREATEBOARD);

  const onClickCreateBoard = async () => {
    try {
      const result = await createBoard({
        variables: {
          writer: "안녕",
          title: "asdfasdfasdfsadf",
          contents: "반갑습니다",
        },
      });

      router.push(
        `05-05-dynamic-routing-board-query-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <button onClick={onClickCreateBoard}>CREATEBOARD</button>
    </div>
  );
}
