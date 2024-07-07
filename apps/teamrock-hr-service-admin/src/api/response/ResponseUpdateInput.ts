import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";

export type ResponseUpdateInput = {
  answer?: string | null;
  employee?: EmployeeWhereUniqueInput | null;
  question?: QuestionWhereUniqueInput | null;
  survey?: SurveyWhereUniqueInput | null;
};
