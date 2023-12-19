import { DownOutlined } from "@ant-design/icons";

// const MyIcon = styled(DownOutlined)`
//   color: red;
//   font-size: 20px;
// `;

export default function LibraryIcon() {
  const onClickIcon = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("id : ", e.currentTarget?.id);
    console.log("click icon");
  };
  return (
    <>
      <div id="삭제할 게시글 ID" onClick={onClickIcon}>
        <DownOutlined />
      </div>
    </>
  );
}
