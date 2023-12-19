import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove1 = async () => {
    await router.push("/section05/05-02-static-routing-board-moved/1");
  };

  const onClickMove2 = async () => {
    await router.push("/section05/05-02-static-routing-board-moved/2");
  };

  const onClickMove3 = async () => {
    await router.push("/section05/05-02-static-routing-board-moved/3");
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
