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
  padding: 2.5rem;
  border-radius: 0.5rem;
`;

export const ModalText = styled.p`
  padding: 1rem 1rem 3rem 1rem;
  color: var(--light-background);
  text-align: center;
  font-size: 1.2rem;
`;

export const ModalTitle = styled.h1`
  color: var(--primary);
  padding-bottom: 0.5rem;
  text-align: center;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

export const LeftButton = styled.button`
  background: var(--secondary);
`;

export const RightButton = styled.button`
  background: var(--primary);
  color: var(--white);
  margin-left: 2rem;
`;
