import { BlueButton, RedInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  const { onClickSubmit, onChangeWriter, onChangeTitle, onChangeContents } =
    props;
  return (
    <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
      작성자 : <RedInput type="text" onChange={onChangeWriter} />
      작성자 : <RedInput type="text" onChange={onChangeTitle} />
      작성자 : <RedInput type="text" onChange={onChangeContents} />
      <BlueButton onClick={onClickSubmit}>CREATEBOARD</BlueButton>
    </div>
  );
}
