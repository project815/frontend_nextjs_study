import type { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { useState } from "react";
import type { IQuery } from "../../../commons/types/generated2/types";

interface PaginationPropsType {
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  lastPage: number;
}
export default function Pagination(props: PaginationPropsType) {
  const { refetch, lastPage } = props;

  const [startPage, setStartPage] = useState<number>(1270);

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
    <>
      <div>
        <span>
          <button onClick={onClickPrevPage} disabled={startPage <= 1}>
            prev{" "}
          </button>
        </span>
        {new Array(10)
          .fill("tmp")
          .filter((_, index) => index + startPage <= lastPage)
          .map((_, index) => (
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
        <button onClick={onClickNextPage} disabled={startPage + 10 > lastPage}>
          next{" "}
        </button>
      </div>
    </>
  );
}
