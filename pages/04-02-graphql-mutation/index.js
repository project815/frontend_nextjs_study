import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation {
    createBoard(writer: "asdfasdfasd", title: "sdf", contents: "xzcv") {
      _id
      message
    }
  }
`;

export default function GraphQLMutationPage() {
  console.log("CREATE_BOARD", CREATE_BOARD);
  const [MyFunction] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await MyFunction();

    console.log(result);
  };

  return (
    <>
      <button onClick={() => onClickSubmit()}>GRAPHQL</button>
    </>
  );
}
