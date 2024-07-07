import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";
import { ResponseUpdateManyWithoutQuestionsInput } from "./ResponseUpdateManyWithoutQuestionsInput";

export type QuestionUpdateInput = {
  text?: string | null;
  survey?: SurveyWhereUniqueInput | null;
  responses?: ResponseUpdateManyWithoutQuestionsInput;
};
