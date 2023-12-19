import { Modal } from "antd";
import { useState } from "react";

export default function ModalCustomPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsOpen(true);
  };
  const handleOk = () => {
    console.log("??");
    setIsOpen(false);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <button onClick={showModal}>모달창 열기!</button>
      <Modal
        title="Basic Modal"
        open={isOpen}
        onOk={handleOk}
        onCancel={closeModal}
      >
        비밀 번호 입력 : <input type="password" />
      </Modal>
    </>
  );
}
