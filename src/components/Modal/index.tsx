import React from 'react';
import ReactDOM from 'react-dom';

import {
  Wrapper,
  StyledModal,
  Backdrop,
  Message,
  RestartButton,
  LeaveButton,
} from './style';

export interface ModalProps {
  isShown: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}

export function Modal({ isShown, message, onConfirm, onCancel }: ModalProps) {
  const modal = (
    <>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Message>{message}</Message>
          <RestartButton onClick={onConfirm}>Restart game</RestartButton>
          <LeaveButton onClick={onCancel}>Leave</LeaveButton>
        </StyledModal>
      </Wrapper>
    </>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
}
