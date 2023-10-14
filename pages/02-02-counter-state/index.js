import { useState } from "react";

export default function CounterStateDocumentPage() {
  const [count, setCount] = useState(0);

  const test = "실행";
  console.log(test);
  function onClickCounterUp() {
    setCount(1);
    setCount(2);
    setCount(3);
    setCount(4);
    setCount(5);
    //1. setCounter에 init된 값과 setCounter(100)의 값을 비교
    //2. 화면을 다시 그림. 훅을 제외하고 모드 다시 실행.
    //100으로 변경된 게 아니라 100으로 다시 그림을 그린 것. 함수도 다시.
    //
  }

  function onClickCounterDown() {
    setCount(count - 1);
  }

  return (
    <>
      <div id="count">{count}</div>
      <button onClick={onClickCounterUp}>Counter Up</button>
      <button onClick={onClickCounterDown}>Counter Down</button>
    </>
  );
}
