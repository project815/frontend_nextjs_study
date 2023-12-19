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

  console.log("router.query.id : ", router.query.id);

  const { data } = useQuery(FETCHBOARD, {
    variables: {
      number: Number(router.query.id),
    },
  });

  console.log("router : ", router);

  return (
    <div>
      {router.query.id}페이지 이동이 완료되었습니다.
      {/* <div>작성자 : {data && data.fetchBoard.writer}</div> */}
      <div>작성자 : {data?.fetchBoard.writer}</div>
      <div>제목 : {data?.fetchBoard.title}</div>
      <div>내용 : {data ? data.fetchBoard.contents : ""}</div>
    </div>
  );
}
