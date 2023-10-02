import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

const FETCHBOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutePage() {
  const router = useRouter();
  console.log("router : ", router);
  console.log("router : ", router.query.id);
  const { data } = useQuery(FETCHBOARD, {
    variables: {
      number: Number(router.query.id),
    },
  });

  useEffect(() => {
    console.log("data : ", data);
  }, [data]);

  return (
    <>
      <h1>페이저 : {router.query.id}</h1>
      <div>writer : {data && data.fetchBoard?.writer}</div>
      <div>title : {data && data.fetchBoard?.title}</div>
      <div>contents : {data && data.fetchBoard?.contents}</div>
    </>
  );
}
