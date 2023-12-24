import { useState } from "react";
import Child1 from "../../../src/components/units/15-lifting-state-up/Child";
import Child2 from "../../../src/components/units/15-lifting-state-up/Child2";

export default function CounterStatePage(): JSX.Element {
  const [count, setCount] = useState(0);
  const onClickCountDown = (): void => {
    setCount(count - 1);
  };
  return (
    <div>
      <Child1 count={count} setCount={setCount} />
      <div>============================================</div>
      <Child2 count={count} onClickCountDown={onClickCountDown} />
    </div>
  );
}
