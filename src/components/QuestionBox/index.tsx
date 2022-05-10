import { signOut } from 'next-auth/react';

import { Modal } from '../Modal';
import { ButtonsDiv, Container, InfoDiv } from './styles';
import { useModal } from '../../hooks/useModal';
import { capitalizeFirstLetter, Question } from '../../utils';
import { modalMessages } from '../../mocks/texts';
import { useEffect, useState } from 'react';
import { useQuestionContext } from '../../contexts';

export const QuestionBox = () => {
  const { isShown, toggle } = useModal();
  const { questions } = useQuestionContext();

  const [currQuestion, setCurrQuestion] = useState<Question>();

  useEffect(() => {
    handleNextQuestion();
  }, []);

  const handleNextQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const currItem = questions[randomIndex];
    questions.splice(randomIndex, 1);

    setCurrQuestion(currItem);
  };

  const handleLeave = () => {
    signOut();
  };

  const handleContinue = () => {
    toggle();
    handleNextQuestion();
  };

  return (
    <>
      <Container>
        <InfoDiv>
          {`${currQuestion?.category} ━
          ${capitalizeFirstLetter(currQuestion?.difficulty)}`}
        </InfoDiv>
        <h1 className="question">{currQuestion?.question}</h1>

        <ButtonsDiv>
          <button
            onClick={
              currQuestion?.correct_answer === 'True'
                ? handleNextQuestion
                : toggle
            }
          >
            True
          </button>
          <button
            onClick={
              currQuestion?.incorrect_answer === 'False'
                ? toggle
                : handleNextQuestion
            }
          >
            False
          </button>
        </ButtonsDiv>
      </Container>

      <Modal
        title={modalMessages.lost.gameOver}
        message={modalMessages.lost.main}
        leftButton={{
          label: modalMessages.lost.restart,
          onPress: handleContinue,
        }}
        rightButton={{
          label: modalMessages.lost.leave,
          onPress: handleLeave,
        }}
        isShown={isShown}
        isLogin={false}
      />
    </>
  );
};
