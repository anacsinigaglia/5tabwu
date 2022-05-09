import React from 'react';
import { Modal } from '../Modal';
import { useModal } from '../Modal/useModal';

export function MainCard() {
  const { isShown, toggle } = useModal();
  const onConfirm = () => toggle();
  const onCancel = () => toggle();

  return (
    <>
      <button onClick={toggle}>Open modal</button>
      <Modal
        isShown={isShown}
        message="Confirmation"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </>
  );
}
