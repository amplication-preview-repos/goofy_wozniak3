import { QuestionUpdateManyWithoutSurveysInput } from "./QuestionUpdateManyWithoutSurveysInput";
import { ResponseUpdateManyWithoutSurveysInput } from "./ResponseUpdateManyWithoutSurveysInput";

export type SurveyUpdateInput = {
  title?: string | null;
  description?: string | null;
  frequency?: "Option1" | null;
  questions?: QuestionUpdateManyWithoutSurveysInput;
  responses?: ResponseUpdateManyWithoutSurveysInput;
};
