import { BlueButton, RedInput } from "./BoardWrite.styles";

interface Propstype {
  onClickSubmit: () => void;
  onChangeWriter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isActive: boolean;
}
export default function BoardWriteUI(props: Propstype) {
  const {
    onClickSubmit,
    onChangeWriter,
    onChangeTitle,
    onChangeContents,
    isActive,
  } = props;
  return (
    <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
      작성자 : <RedInput type="text" onChange={onChangeWriter} />
      제목 : <RedInput type="text" onChange={onChangeTitle} />
      내용 : <RedInput type="text" onChange={onChangeContents} />
      <BlueButton isActive={isActive} onClick={onClickSubmit}>
        CREATEBOARD
      </BlueButton>
    </div>
  );
}
