import { gql, useMutation } from "@apollo/client";

const CREATEPRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput! # 변수의 타입 적는 곳
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      #실제 우리가 전달할 변수 적는 곳
      _id
      message
    }
  }
`;

export default function GraphQlMutationProduct() {
  const [createProduct] = useMutation(CREATEPRODUCT);

  const onClickCreateBoard = async () => {
    const result = await createProduct({
      variables: {
        seller: "송민석123",
        createProductInput: {
          name: "키보드 마우스",
          detail: "정말 안 좋은 ",
          price: 10000,
        },
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
