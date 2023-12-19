import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Section05QuizDetailUI from "./Section05QuizDetail.presenter";
import { FETCHPRODUCT } from "./Section05QuizDetail.query";
import type { IQuery } from "../../../../../../commons/types/generated/types";

export function Section05QuizDetail() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchProduct">>(FETCHPRODUCT, {
    variables: {
      productId: router.query.id,
    },
  });

  console.log(router.query.id);
  return <Section05QuizDetailUI data={data} />;
}
