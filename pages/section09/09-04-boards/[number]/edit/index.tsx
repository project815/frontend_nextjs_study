import { useQuery } from "@apollo/client";
import BoardWrite from "../../../../../src/components/units/board/section09-board2/BoardWrite.container";
import { FETCHBOARD } from "../../../../../src/components/units/board/section09-board2/BoardWrite.query";
import { useRouter } from "next/router";

export default function Section09BoardEditPage() {
  const router = useRouter();

  const { data: defaultValue } = useQuery(FETCHBOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });

  console.log("defaultValue : ", defaultValue);
  return <BoardWrite isEdit={true} defaultValue={defaultValue?.fetchBoard} />;
}
