import { signOut } from 'next-auth/react';

import { Modal } from '../Modal';
import { ButtonsDiv, Container, InfoDiv } from './styles';
import { useModal } from '../../hooks/useModal';
import { capitalizeFirstLetter, Question } from '../../utils';
import { modalMessages } from '../../mocks/texts';
import { useEffect, useState } from 'react';
import { questions } from '../../mocks/questions';

export const QuestionBox = () => {
  const { isShown, toggle } = useModal();
  const [question, setQuestion] = useState<Question>();

  var availableQuestions: Question[] = questions;

  useEffect(() => {
    handleNext();
  }, []);

  const handleNext = () => {
    var randomIndex = Math.floor(Math.random() * availableQuestions.length);
    var currItem = availableQuestions[randomIndex];
    availableQuestions.splice(randomIndex, 1);

    setQuestion(currItem);
  };

  const handleLeave = () => {
    signOut();
    availableQuestions = questions;
  };

  return (
    <>
      <Container>
        <InfoDiv>
          {question?.category} ━ {capitalizeFirstLetter(question?.difficulty)}
        </InfoDiv>
        <h1 className="question">{question?.question}</h1>

        <ButtonsDiv>
          <button className="answer" onClick={handleNext}>
            {question?.correct_answer}
          </button>
          <button className="answer" onClick={toggle}>
            {question?.incorrect_answers[0]}
          </button>
        </ButtonsDiv>
      </Container>

      <Modal
        message={modalMessages.lost.main}
        leftButton={{
          label: modalMessages.lost.restart,
          onPress: toggle,
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
