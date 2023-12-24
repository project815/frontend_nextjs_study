export default function Child1(props: any): JSX.Element {
  const onClickCountDown = () => {
    props.setCount((prev) => prev + 1);
  };
  return (
    <div>
      <div>child 1 : {props.count}</div>

      <button onClick={onClickCountDown}>카운트 내리기</button>
    </div>
  );
}
