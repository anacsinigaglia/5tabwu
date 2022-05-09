import { Question } from './types';

export const capitalizeFirstLetter = (value?: string) =>
  value && value.charAt(0).toUpperCase() + value.slice(1);
