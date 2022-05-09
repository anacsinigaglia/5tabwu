import styled from 'styled-components';

export const Container = styled.header`
  background: var(--light-background);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 5rem;

  svg {
    background: var(--primary);
    margin-right: 1.5rem;
    font-size: 2.2rem;
    padding: 0.3rem;
  }
`;

export const ButtonDiv = styled.div`
  padding-right: 3rem;
`;
