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

  const [availableQuestions, setAvailableQuestions] =
    useState<Question[]>(questions);
  const [currQuestion, setCurrQuestion] = useState<Question>();

  useEffect(() => {
    handleNextQuestion();
  }, []);

  const handleNextQuestion = () => {
    var randomIndex = Math.floor(Math.random() * availableQuestions.length);
    var currItem = availableQuestions[randomIndex];
    availableQuestions.splice(randomIndex, 1);

    setCurrQuestion(currItem);
  };

  const handleLeave = () => {
    signOut();
    setAvailableQuestions(questions);
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
