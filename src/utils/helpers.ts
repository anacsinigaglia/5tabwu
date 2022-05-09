import { Question } from './types';

export const capitalizeFirstLetter = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

export const pickRandomQuestion = (
  questions: Array<Question>,
  askedOnes: number[]
): Question => {
  if (askedOnes.length === 0) {
    for (var i = 0; i < questions.length; i++) askedOnes.push(i);
  }
  var randomIndex = Math.floor(Math.random() * askedOnes.length);
  var currItemIndex = askedOnes[randomIndex];
  askedOnes.splice(randomIndex, 1);

  return questions[currItemIndex];
};

export const callApi = async (): Promise<Question[] | undefined> => {
  try {
    return (await fetch('/api/questions')).json();
  } catch (err) {
    console.log('Error: ' + err);
  }
};
