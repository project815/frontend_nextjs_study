export default function CounterLetDocumentPage() {
  function onClickCounterUp() {
    const updateCount = Number(document.getElementById("count").innerHTML) + 1;
    document.getElementById("count").innerHTML = updateCount;
  }

  function onClickCounterDown() {
    const updateCount = Number(document.getElementById("count").innerHTML) - 1;
    document.getElementById("count").innerHTML = updateCount;
  }

  return (
    <>
      <div id="count">0</div>
      <button onClick={onClickCounterUp}>Counter Up</button>
      <button onClick={onClickCounterDown}>Counter Down</button>
    </>
  );
}
