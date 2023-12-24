import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../src/commons/types/generated2/types";

const FETCHBOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function MapBoardsPage() {
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">>(FETCHBOARDS);

  const onClickPage = (e: React.MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(e.currentTarget.id) });
  };

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
      <div>
        <div>방법 1 - 배열 안에 요소 이용하는 방법</div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <>
            <span id={String(i)} onClick={onClickPage}>
              {i}
            </span>
          </>
        ))}
      </div>

      <div>
        <div>방법 2 - index활용하는 방법</div>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
          <>
            <span id={String(index + 1)} onClick={onClickPage}>
              {index + 1}
            </span>
          </>
        ))}
      </div>

      <div>
        <div>방법 3 - new Array를 활용하는 방법</div>
        {new Array(10).fill("tmp").map((_, index) => (
          <>
            <span id={String(index + 1)} onClick={onClickPage}>
              {index + 1}
            </span>
          </>
        ))}
      </div>
    </div>
  );
}
