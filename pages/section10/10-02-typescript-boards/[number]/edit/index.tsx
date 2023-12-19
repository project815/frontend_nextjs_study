import { useQuery } from "@apollo/client";
import BoardWrite from "../../../../../src/components/units/board/section10-typescript-boards/BoardWrite.container";
import { FETCHBOARD } from "../../../../../src/components/units/board/section10-typescript-boards/BoardWrite.query";
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

// 1. state의 초기값에 defaultValue를 널어주기
// 2. mutaion에서 수정된 값만 전달하기
