export default function CheckBox() {
  const qqq3 = (e) => {
    e.stopPropagation();
    alert("클릭3");
  };
  return (
    <>
      <input type="checkbox" onClick={qqq3} />
    </>
  );
}
