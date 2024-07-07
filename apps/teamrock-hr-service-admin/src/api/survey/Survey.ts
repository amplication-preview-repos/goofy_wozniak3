import { Question } from "../question/Question";
import { Response } from "../response/Response";

export type Survey = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  frequency?: "Option1" | null;
  questions?: Array<Question>;
  responses?: Array<Response>;
};
