import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Section05QuizDetailUI from "./Section05QuizDetail.presenter";
import { FETCHPRODUCT } from "./Section05QuizDetail.query";

export function Section05QuizDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCHPRODUCT, {
    variables: {
      productId: router.query.id,
    },
  });

  console.log("data : ", data);

  console.log(router.query.id);
  return <Section05QuizDetailUI data={data} />;
}
