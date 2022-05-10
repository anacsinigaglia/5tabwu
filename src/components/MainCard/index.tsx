import React from 'react';
import { useModal } from '../../hooks/useModal';
import { mainTexts, modalMessages } from '../../mocks/texts';
import { Session } from '../../utils';
import { Modal } from '../Modal';
import { QuestionBox } from '../QuestionBox';
import { Container, StartButton } from './styles';

interface MainCardProps {
  session: Session | null;
}

export function MainCard({ session }: MainCardProps) {
  const { isShown, toggle } = useModal();

  return (
    <Container>
      {session ? (
        <QuestionBox />
      ) : (
        <>
          <h1>{mainTexts.title}</h1>
          <p>{mainTexts.body}</p>
          <h2>{mainTexts.footer}</h2>

          <StartButton onClick={toggle}>Start</StartButton>
          <Modal
            isShown={isShown}
            title={modalMessages.login.signIn}
            message={modalMessages.login.welcome}
            session={session}
            isLogin={true}
          />
        </>
      )}
    </Container>
  );
}
