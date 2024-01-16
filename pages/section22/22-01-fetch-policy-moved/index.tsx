import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../src/commons/types/generated2/types";

const FETCHBOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function FetchPolicyMovedPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">>(FETCHBOARDS);

  console.log("data : ", data);
  return (
    <div>
      {/* <div>
        {data?.fetchBoards.map((i) => (
          <div key={i._id} style={{ marginTop: "10px" }}>
            <span style={{ marginLeft: "4px" }}>작성자 : {i.writer}</span>
            <span style={{ marginLeft: "4px" }}>제목 : {i.title}</span>
            <span style={{ marginLeft: "4px" }}>
              내용 : {i ? i.contents : "불러오는 중"}
            </span>
          </div>
        ))}
      </div> */}
    </div>
  );
}
