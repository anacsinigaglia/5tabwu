import { signOut } from 'next-auth/react';

import { Modal } from '../Modal';
import { ButtonsDiv, Container, InfoDiv } from './styles';
import { useModal } from '../../hooks/useModal';
import {
  capitalizeFirstLetter,
  pickRandomQuestion,
  Question,
} from '../../utils';
import { questions } from '../../mocks/questions';
import { modalMessages } from '../../mocks/texts';
import { useEffect, useState } from 'react';

export const QuestionBox = () => {
  const { isShown, toggle } = useModal();
  const [question, setQuestion] = useState<Question>();

  var askedOnes: Question[] = questions.results;

  console.log(askedOnes);

  useEffect(() => {
    handleNext();
  }, []);

  const handleNext = () => {
    var randomIndex = Math.floor(Math.random() * askedOnes.length);
    var currItem = askedOnes[randomIndex];
    askedOnes.splice(randomIndex, 1);

    setQuestion(currItem);
  };

  const handleLeave = () => {
    signOut();
    askedOnes = questions.results;
  };

  const handleContinue = () => {
    toggle();
  };

  const handleError = () => {
    toggle();
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
          <button className="answer" onClick={handleError}>
            {question?.incorrect_answers[0]}
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
