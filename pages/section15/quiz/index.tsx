import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../src/commons/types/generated2/types";
import BoardList from "../../../src/components/units/15-quiz/BoardList";
import Pagination from "../../../src/components/units/15-quiz/Pagination";

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

const FETCHBOARDSCOUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function MapBoardsPage() {
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">>(FETCHBOARDS);

  const { data: totalPage } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCHBOARDSCOUNT);
  const lastPage = Math.ceil(Number(totalPage?.fetchBoardsCount) / 10);

  return (
    <div>
      <BoardList data={data} />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </div>
  );
}
