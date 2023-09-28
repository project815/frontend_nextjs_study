import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";

const CREATEPRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(
      seller: $seller
      createProductInput: $createProductInput #   {$name : String, $detail:String, $price:Number} #    { name: $name, detail: $detail, price: $price }
    ) {
      _id
      number
      message
    }
  }
`;

export default function GraphQLMutationProductPage() {
  const [seller, setSeller] = useState("");
  const [productInfo, setProductInfo] = useState({
    name: "",
    detail: "",
    price: 0,
  });
  const [createProduct] = useMutation(CREATEPRODUCT);

  const onSubmitProductInfo = async (event) => {
    event.preventDefault();
    const result = await createProduct({
      variables: {
        seller: seller,
        createProductInput: {
          name: productInfo.name,
          detail: productInfo.detail,
          price: Number(productInfo.price),
        },
      },
    });
    console.log("result : ", result);
  };

  useEffect(() => {
    console.log("seller : ", seller);
    console.log("name : ", productInfo.name);
    console.log("detail : ", productInfo.detail);
    console.log("price : ", productInfo.price);
  }, [seller, productInfo]);

  //   const

  return (
    <>
      <form onSubmit={onSubmitProductInfo}>
        <div>
          <span>seller : </span>
          <input
            type="text"
            onChange={(event) => setSeller(event.target.value)}
          />
        </div>

        <div>
          <span>name : </span>
          <input
            type="text"
            onChange={(event) =>
              setProductInfo((prev) => ({
                ...prev,
                name: event.target.value,
              }))
            }
          />
        </div>

        <div>
          <span>detail : </span>
          <input
            type="text"
            onChange={(event) => {
              setProductInfo((prev) => ({
                ...prev,
                detail: event.target.value,
              }));
            }}
          />
        </div>

        <div>
          <span>price : </span>
          <input
            type="number"
            onChange={(event) => {
              setProductInfo((prev) => ({
                ...prev,
                price: event.target.value,
              }));
            }}
          />
        </div>
        <button type="submit"></button>
      </form>
    </>
  );
}
