import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";
import { ResponseListRelationFilter } from "../response/ResponseListRelationFilter";

export type SurveyWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  frequency?: "Option1";
  questions?: QuestionListRelationFilter;
  responses?: ResponseListRelationFilter;
};
