import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
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

  const [startPage, setStartPage] = useState<number>(1);

  const onClickPage = (e: React.MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(e.currentTarget.id) });
  };

  const onClickPrevPage = (): void => {
    setStartPage((prev) => prev - 10);
    void refetch({ page: startPage - 10 });
  };
  const onClickNextPage = (): void => {
    setStartPage((prev) => prev + 10);
    void refetch({ page: startPage + 10 });
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
        <span>
          <button onClick={onClickPrevPage} disabled={startPage <= 1}>
            prev{" "}
          </button>
        </span>
        {new Array(10).fill("tmp").map((_, index) => (
          <>
            <span
              id={String(index + startPage)}
              onClick={onClickPage}
              style={{ marginLeft: "3px", marginRight: "3px" }}
            >
              {index + startPage}
            </span>
          </>
        ))}
        <button onClick={onClickNextPage}>next </button>
      </div>
    </div>
  );
}
