import { gql, useMutation } from "@apollo/client";

const CREATEBOARD = gql`
  mutation {
    createBoard(writer: "안녕", title: "12312", contents: "반갑습니다.") {
      _id
      number
      message
    }
  }
`;

export default function GraphQlMutation() {
  const [createBoard] = useMutation(CREATEBOARD);

  const onClickCreateBoard = async () => {
    try {
      const result = await createBoard();
      console.log("data : ", result);
    } catch (error) {
      console.log("error : ", error);
    }
  };

  return (
    <div>
      <button onClick={onClickCreateBoard}>CREATEBOARD</button>
    </div>
  );
}
