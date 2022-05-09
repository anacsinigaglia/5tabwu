import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Session } from '../../utils';
import { AuthButton } from '../AuthButton';

import {
  Container,
  Backdrop,
  LeftButton,
  RightButton,
  ModalText,
  Buttons,
} from './style';

export interface ModalProps {
  isShown: boolean;
  message: string;
  leftButton?: Button;
  rightButton?: Button;
  session?: Session | null;
  isLogin: boolean;
}

export function Modal({
  isShown,
  message,
  isLogin = false,
  leftButton,
  rightButton,
  session,
}: ModalProps) {
  const modal = (
    <>
      <Backdrop />
      <Container>
        <ModalText>{message}</ModalText>
        {isLogin ? (
          <AuthButton session={session} />
        ) : (
          <Buttons>
            {leftButton && (
              <LeftButton onClick={leftButton.onPress}>
                {leftButton.label}
              </LeftButton>
            )}
            {rightButton && (
              <RightButton onClick={rightButton.onPress}>
                {rightButton.label}
              </RightButton>
            )}
          </Buttons>
        )}
      </Container>
    </>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
}
