import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";
import { ResponseCreateNestedManyWithoutQuestionsInput } from "./ResponseCreateNestedManyWithoutQuestionsInput";

export type QuestionCreateInput = {
  text?: string | null;
  survey?: SurveyWhereUniqueInput | null;
  responses?: ResponseCreateNestedManyWithoutQuestionsInput;
};
