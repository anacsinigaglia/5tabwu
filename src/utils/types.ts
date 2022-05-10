export interface Session {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export interface Button {
  label: string;
  onPress: () => void;
}

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answer: string;
}
