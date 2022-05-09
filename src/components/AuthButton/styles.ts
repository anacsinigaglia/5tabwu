import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  margin: 0 auto;

  border-radius: 3rem;
  background: var(--white);
  font-weight: bold;

  svg {
    width: 20px;
    height: 20px;

    &:first-child {
      margin-right: 1rem;
    }

    &:last-child {
      margin-left: 1rem;
      color: var(--grey);
    }
  }
`;
