import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";

export type ResponseWhereInput = {
  id?: StringFilter;
  answer?: StringNullableFilter;
  employee?: EmployeeWhereUniqueInput;
  question?: QuestionWhereUniqueInput;
  survey?: SurveyWhereUniqueInput;
};
