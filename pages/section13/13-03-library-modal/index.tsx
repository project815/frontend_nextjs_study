import { Modal } from "antd";

export default function ModalAlertPage() {
  const onClickSuccess = (): void => {
    Modal.success({
      content: "some messages...some messages...",
    });
  };
  const onClickFail = (): void => {
    Modal.error({
      title: "This is an error message",
      content: "some messages...some messages...",
    });
  };
  return (
    <>
      <button onClick={onClickSuccess}>성공했을 때!</button>
      <button onClick={onClickFail}>실패했을 때!</button>
    </>
  );
}
