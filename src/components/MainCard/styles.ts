import styled from 'styled-components';

export const Container = styled.header`
  max-width: 1120px;
  margin: 5rem auto;
  padding: 4.5rem 8rem;
  background: var(--background);
  border-radius: 3rem;

  h1,
  h2 {
    text-align: center;
  }

  p {
    text-align: justify;
    padding: 1rem;
  }
`;

export const StartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem auto 0 auto;
  background: var(--primary);
  color: var(--white);
`;
