import { useState } from "react";

export default function CounterStateDocumentPage() {
  const [count, setCount] = useState(0);

  function onClickCounterUp() {
    setCount(count + 1);
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
