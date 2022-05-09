import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
`;

export const StyledModal = styled.div`
  background: var(--light-background);
  height: fit-content;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 1.5rem;
`;

export const Message = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 2rem;
`;

export const RestartButton = styled.button`
  background: var(--secondary);
`;

export const LeaveButton = styled.button`
  background: var(--primary);
  color: var(--white);
  margin-left: 2rem;
`;
