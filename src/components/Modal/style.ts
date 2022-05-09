import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 500;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  background: var(--light-primary);
  max-width: 52%;
  height: fit-content;
  padding: 2rem;
  border-radius: 1.5rem;
`;

export const ModalText = styled.h4`
  color: var(--light-background);
  text-align: center;
  padding: 2rem;
  font-size: 2rem;
`;

export const Message = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 2rem;
`;

export const LeftButton = styled.button`
  background: var(--secondary);
`;

export const RightButton = styled.button`
  background: var(--primary);
  color: var(--white);
  margin-left: 2rem;
`;
