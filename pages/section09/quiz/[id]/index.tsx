import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCHPRODUCT } from "../../../../src/components/units/board/section09-quiz/ProductWrite.query";
export default function Section09QuizProductDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCHPRODUCT, {
    variables: {
      productId: router.query.id,
    },
  });

  const onClickMoveToEditPage = () => {
    router.push(`/section09/quiz/${router.query.id}/edit`);
  };

  console.log("data : ", data);

  return (
    <>
      <div>판매자 : {data?.fetchProduct.seller}</div>
      <div>상품 이름 : {data?.fetchProduct.name}</div>
      <div>상품 정보 : {data?.fetchProduct.detail}</div>
      <div>상품 가격 : {data?.fetchProduct.price}</div>
      <button onClick={onClickMoveToEditPage}>수정하기</button>
    </>
  );
}
