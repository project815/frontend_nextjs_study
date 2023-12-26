import { useState } from "react";

export default function CommentItem(props: any): JSX.Element {
  const { i } = props;
  const [isEdit, setIsEdit] = useState<boolean>();

  const onClickEdit = (): void => {
    setIsEdit(true);
  };
  return (
    <div>
      {!isEdit ? (
        <div style={{ marginTop: "10px" }}>
          <span style={{ marginLeft: "4px" }}>
            내용 : {i ? i.contents : "불러오는 중"}
          </span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      ) : (
        <input />
      )}
    </div>
  );
}
