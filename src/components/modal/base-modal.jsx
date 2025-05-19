import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";

const BaseModal = ({
  isOpen,
  onClose,
  size = "xl",
  title,
  children,
  footer,
}) => {
  return (

    <Modal isOpen={isOpen} onClose={onClose} size={size} classNames={{
            base: "bg-[#1C1A32ff]",
            header: "text-white border-b border-[#252343]",
            closeButton:"text-white text-2xl",




    }}>
      <ModalContent>
        {title && <ModalHeader>{title}</ModalHeader>}
        <ModalBody className="py-0 px-0 ">
          {children}
        </ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
};

export default BaseModal;