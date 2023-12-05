import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCHPRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`;
export default function Section05QuizDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCHPRODUCT, {
    variables: {
      productId: router.query.id,
    },
  });

  console.log("data : ", data);

  console.log(router.query.id);
  return (
    <div>
      <div>제품 상세 정보</div>
      <div>판매자 : {data?.fetchProduct?.seller}</div>
      <div>상품명 : {data?.fetchProduct?.name}</div>
      <div>제품 상세 정보 : {data?.fetchProduct?.detail}</div>
      <div>가격 : {data?.fetchProduct?.price}</div>
    </div>
  );
}
