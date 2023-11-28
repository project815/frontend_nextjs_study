export default function CounterLetDocumentPage() {
  const onClickCountUp = () => {
    const count =
      Number(document.getElementById("change_number").innerText) + 1;
    document.getElementById("change_number").innerText = String(count);
  };
  const onClickCountDown = () => {
    const count =
      Number(document.getElementById("change_number").innerText) + 1;
    document.getElementById("change_number").innerText = String(count);
  };
  return (
    <div>
      <div id="change_number">0</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickCountDown}>카운트 내리기</button>
    </div>
  );
}
