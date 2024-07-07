import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";
import { ResponseListRelationFilter } from "../response/ResponseListRelationFilter";

export type QuestionWhereInput = {
  id?: StringFilter;
  text?: StringNullableFilter;
  survey?: SurveyWhereUniqueInput;
  responses?: ResponseListRelationFilter;
};
