import { BlueButton, RedInput } from "./BoardWrite.styles";

interface PropsType {
  onClick: () => void;
  onChangeWriter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isEdit: boolean;
}
export default function BoardWriteUI(props: PropsType) {
  const { onClick, onChangeWriter, onChangeTitle, onChangeContents, isEdit } =
    props;
  return (
    <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
      작성자 : <RedInput type="text" onChange={onChangeWriter} />
      제목 : <RedInput type="text" onChange={onChangeTitle} />
      내용 : <RedInput type="text" onChange={onChangeContents} />
      <BlueButton onClick={onClick}>{isEdit ? "수정" : "등록"}</BlueButton>
    </div>
  );
}
