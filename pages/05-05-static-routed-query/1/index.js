import { gql, useQuery } from "@apollo/client";
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
  const { data } = useQuery(FETCHBOARD, {
    variables: {
      number: 4598,
    },
  });

  useEffect(() => {
    console.log("data : ", data);
  }, [data]);

  return (
    <>
      <h1>PAGE1</h1>
      <div>writer : {data && data.fetchBoard.writer}</div>
      <div>title : {data && data.fetchBoard.title}</div>
      <div>contents : {data && data.fetchBoard.contents}</div>
    </>
  );
}
