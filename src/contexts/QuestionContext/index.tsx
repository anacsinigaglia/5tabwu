import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { Question } from '../../utils';

interface QuestionContextData {
  questions: Question[];
  setQuestions: (questions: Question[]) => void;
}

interface QuestionProviderProps {
  children: ReactNode;
}

const QuestionContext = createContext({} as QuestionContextData);

export const QuestionProvider = ({ children }: QuestionProviderProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const memoizedValues = useMemo(
    () => ({ questions, setQuestions }),
    [questions, setQuestions]
  );
  return (
    <QuestionContext.Provider value={memoizedValues}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => useContext(QuestionContext);
