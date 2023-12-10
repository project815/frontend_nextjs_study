export default function SectionBoardComponentPage(props) {
  const { isEdit } = props;
  return (
    <div>
      <h1>{isEdit ? "등록" : "수정"}페이지</h1>
      제목 : <input type="text" />
      <br />
      내용 : <input type="text" />
      <br />
      <button></button>
    </div>
  );
}
