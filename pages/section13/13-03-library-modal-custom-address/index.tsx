import { Modal } from "antd";
import { useState } from "react";
import { DaumPostcodeEmbed, type Address } from "react-daum-postcode";

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
  const handleComplete = (data: Address) => {
    console.log("data : ", data);
    setIsOpen(false);
  };
  return (
    <>
      <button onClick={showModal}>모달창 열기!</button>

      {/* 모달 종료 방식 1 숨기는 방법 - 모달창에 있는 내용이 남아있음. */}
      {/* <Modal open={isOpen} onOk={handleOk} onCancel={closeModal}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}

      {/* 모달 종료 방식 2 삭제하는 방법  - 모달창에 있는 내용이 날라감. */}
      {isOpen && (
        <Modal open={isOpen} onOk={handleOk} onCancel={closeModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
