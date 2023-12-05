import { useRouter } from "next/router";

export default function DynamiccRoutingPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/20031");
  };

  const onClickMove2 = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/20001");
  };

  const onClickMove3 = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/19992");
  };

  return (
    <div>
      <div> 페이지 이동하기</div>
      <button onClick={onClickMove1}>1 페이지 이동</button>
      <button onClick={onClickMove2}>2 페이지 이동</button>
      <button onClick={onClickMove3}>3 페이지 이동</button>
    </div>
  );
}
