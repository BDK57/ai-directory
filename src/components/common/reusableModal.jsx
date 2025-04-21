import React from 'react';
import {  Modal,  ModalContent,  ModalHeader,  ModalBody,  ModalFooter} from "@heroui/modal";
import { Button } from '@heroui/button';

const ReusableModal = ({
  isOpen,
  onClose,
  title,
  children,
  confirmText = "Confirm",
  cancelText = "Close",
  onConfirm,
  showFooter = true,
  size = "md", // sm, md, lg, xl, full
  confirmColor = "primary",
  cancelColor = "danger",
  cancelVariant = "light",
  headerProps = {},
  bodyProps = {},
  footerProps = {},
  contentProps = {},
  hideCloseButton = false,
}) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onOpenChange={onClose}
      hideCloseButton={hideCloseButton}
    >
      <ModalContent 
        {...contentProps}
        size={size} // Size prop goes here!
        className={`${contentProps.className || ''}`}
      >
        {(onClose) => (
          <>
            {title && (
              <ModalHeader {...headerProps}>
                {title}
              </ModalHeader>
            )}
            
            <ModalBody {...bodyProps}>
              {children}
            </ModalBody>
            
            {showFooter && (
              <ModalFooter {...footerProps}>
                <Button 
                  color={cancelColor} 
                  variant={cancelVariant} 
                  onPress={onClose}
                >
                  {cancelText}
                </Button>
                {onConfirm && (
                  <Button 
                    color={confirmColor} 
                    onPress={() => {
                      onConfirm();
                      onClose();
                    }}
                  >
                    {confirmText}
                  </Button>
                )}
              </ModalFooter>
            )}
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ReusableModal;