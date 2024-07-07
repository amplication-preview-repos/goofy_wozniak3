import { QuestionCreateNestedManyWithoutSurveysInput } from "./QuestionCreateNestedManyWithoutSurveysInput";
import { ResponseCreateNestedManyWithoutSurveysInput } from "./ResponseCreateNestedManyWithoutSurveysInput";

export type SurveyCreateInput = {
  title?: string | null;
  description?: string | null;
  frequency?: "Option1" | null;
  questions?: QuestionCreateNestedManyWithoutSurveysInput;
  responses?: ResponseCreateNestedManyWithoutSurveysInput;
};
