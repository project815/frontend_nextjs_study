import { gql, useMutation } from "@apollo/client";

const CREATEBOARD = gql`
  mutation {
    createBoard(writer: "철수", title: "안녕하세요", contents: "반갑습니다.") {
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
