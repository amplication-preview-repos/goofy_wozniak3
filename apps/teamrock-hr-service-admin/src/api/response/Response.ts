import { Employee } from "../employee/Employee";
import { Question } from "../question/Question";
import { Survey } from "../survey/Survey";

export type Response = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  answer: string | null;
  employee?: Employee | null;
  question?: Question | null;
  survey?: Survey | null;
};
