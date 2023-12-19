export default function CounterLetDocumentPage(): JSX.Element {
  const onClickCountUp = (): void => {
    const element = document.getElementById("change_number");

    if (element) {
      const count = Number(element.innerText) + 1;
      element.innerText = String(count);
    }
  };
  const onClickCountDown = () => {
    const element = document.getElementById("change_number");

    if (element) {
      const count = Number(element.innerText) + 1;
      element.innerText = String(count);
    }
  };
  return (
    <div>
      <div id="change_number">0</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickCountDown}>카운트 내리기</button>
    </div>
  );
}
