import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const InfoDiv = styled.div`
  color: var(--light-primary);
  margin: 0 0 1rem 0;
`;

export const ButtonsDiv = styled.div`
  margin-top: 1.5rem;

  button:first-child {
    background: var(--secondary);
    border: 1px solid var(--primary);
  }

  button:last-child {
    background: var(--primary);
    color: var(--white);
    margin-left: 1rem;
    border: 1px solid var(--secondary);
  }
`;
