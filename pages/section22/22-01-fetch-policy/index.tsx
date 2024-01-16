import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import type { IQuery } from "../../../src/commons/types/generated2/types";
import FetchPolicyCopmonet from "../../../src/components/units/22-fetch-policy";

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

export default function FetchPolicyPage() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoards">>(FETCHBOARDS);

  console.log("ASDFASDF : ", data);
  const [isOpen, setIsOpen] = useState(false);

  // 1. 새로운 컴포넌트 등장시에도 글로벌 스테이트 값이 유지되는지?
  const onClickIsOpen = () => {
    setIsOpen(!isOpen);
  };

  // 2. 새로운 페이지 이동시에도 글로벌 스테이트 값이 유지되는지?
  const onClickPageMove = async () => {
    await router.push(`/section22/22-01-fetch-policy-moved`);
  };

  return (
    <div>
      <button onClick={onClickIsOpen}>
        1. 버튼을 클릭하면 새로운 컴포넌트가 나타납니다.
      </button>
      {isOpen && <FetchPolicyCopmonet />}
      <button onClick={onClickPageMove}>
        2. 버튼을 클릭하면 페이지가 이동됩니다.{" "}
      </button>
    </div>
  );
}
