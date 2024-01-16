import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../commons/types/generated2/types";
// import { IQuery } from "../../../commons/types/generated2/types";

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

export default function FetchPolicyCopmonet() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">>(FETCHBOARDS, {
    // fetchPolicy: "network-only", // 네트워크 업데이트마다 그 때 그 때 바로 데이터 받기
  });

  return (
    <div>
      <div>
        {data?.fetchBoards.map((i) => (
          <div key={i._id} style={{ marginTop: "10px" }}>
            <span style={{ marginLeft: "4px" }}>작성자 : {i.writer}</span>
            <span style={{ marginLeft: "4px" }}>제목 : {i.title}</span>
            <span style={{ marginLeft: "4px" }}>
              내용 : {i ? i.contents : "불러오는 중"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
