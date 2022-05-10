import { Question } from '../../utils';
import { questions } from './data';

import type { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default (_req: NextApiRequest, res: NextApiResponse<Question[]>) => {
  res.status(200).json(questions);
};
