import { gql, useMutation, useQuery } from "@apollo/client";

const FETCHPRODUCTS = gql`
  query {
    fetchProducts(page: 1) {
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`;
const DELETEPRODUCT = gql`
  mutation deleteProduct($productId: ID) {
    deleteProduct(productId: $productId) {
      _id
      number
      message
    }
  }
`;

export default function Section08Quiz() {
  const { data } = useQuery(FETCHPRODUCTS);
  const [deleteProduct] = useMutation(DELETEPRODUCT);

  const onClickDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await deleteProduct({
      variables: {
        productId: e.currentTarget.id,
      },
      refetchQueries: [{ query: FETCHPRODUCTS }],
    });
  };
  return (
    <div>
      {data?.fetchProducts.map((i) => (
        <div
          style={{
            width: "800px",
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
          key={i._id}
        >
          <span style={{ marginTop: "10px" }}>
            <input type="checkbox" />
          </span>
          <span style={{ marginTop: "10px" }}>{i._id}</span>
          <span style={{ marginTop: "10px" }}>{i.selle}</span>
          <span style={{ marginTop: "10px" }}>{i.name}</span>
          <span style={{ marginTop: "10px" }}>{i.detail}</span>
          <span style={{ marginTop: "10px" }}>{i.price}</span>
          <span style={{ marginTop: "10px" }}>{i.createdAt}</span>
          <span>
            <button id={i._id} onClick={onClickDelete}>
              삭제
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}
