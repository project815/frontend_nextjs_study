import { useQuery } from "@apollo/client";
import Section09QuizProduct from "../../../../../src/components/units/board/section09-quiz/ProductWrite.container";
import { FETCHPRODUCT } from "../../../../../src/components/units/board/section09-quiz/ProductWrite.query";
import { useRouter } from "next/router";

export default function Section09QuizProductEditPage() {
  const router = useRouter();
  console.log(" router.query.id : ", router.query.id);
  const { data: defaultValue } = useQuery(FETCHPRODUCT, {
    variables: {
      productId: router.query.id,
    },
  });
  console.log(" defaultValue?.fetchProduct : ", defaultValue?.fetchProduct);
  return (
    <Section09QuizProduct
      isEdit={true}
      defaultValue={defaultValue?.fetchProduct}
    />
  );
}
