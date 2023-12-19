import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCHBOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage3() {
  const router = useRouter();

  console.log("router.query.id : ", router.query.number);

  const { data } = useQuery(FETCHBOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });

  console.log("router : ", router);

  return (
    <div>
      {router.query.number} 번째 페이지 이동이 완료되었습니다.
      <div>작성자 : {data?.fetchBoard?.writer}</div>
      <div>제목 : {data?.fetchBoard?.title}</div>
      <div>내용 : {data ? data.fetchBoard?.contents : ""}</div>
      <button
        onClick={async () =>
          await router.push(
            `/section09/09-03-boards/${
              typeof router.query.number === "string" ? router.query.number : ""
            }/edit`
          )
        }
      >
        수정하기
      </button>
    </div>
  );
}
