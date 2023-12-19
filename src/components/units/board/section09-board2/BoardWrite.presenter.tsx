import type { Maybe } from "graphql/jsutils/Maybe";
import type { IBoardReturn } from "../../../../commons/types/generated/types";
import { BlueButton, RedInput } from "./BoardWrite.styles";
interface PropsType {
  onClick: () => void;
  onChangeWriter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isEdit: boolean;
  defaultValue?: Maybe<IBoardReturn> | undefined;
}
export default function BoardWriteUI(props: PropsType) {
  const {
    onClick,
    onChangeWriter,
    onChangeTitle,
    onChangeContents,
    isEdit,
    defaultValue,
  } = props;
  return (
    <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
      작성자 :{" "}
      <RedInput
        type="text"
        onChange={onChangeWriter}
        defaultValue={defaultValue?.writer ?? ""}
      />
      제목 :{" "}
      <RedInput
        type="text"
        onChange={onChangeTitle}
        defaultValue={defaultValue?.title ?? ""}
      />
      내용 :{" "}
      <RedInput
        type="text"
        onChange={onChangeContents}
        defaultValue={defaultValue?.contents ?? ""}
      />
      <BlueButton onClick={onClick}>{isEdit ? "수정" : "등록"}</BlueButton>
    </div>
  );
}
