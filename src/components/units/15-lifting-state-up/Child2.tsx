export default function Child2(props: any): JSX.Element {
  return (
    <div>
      <div>child 2 : {props.count}</div>
      <button onClick={props.onClickCountDown}>카운트 내리기</button>
    </div>
  );
}
