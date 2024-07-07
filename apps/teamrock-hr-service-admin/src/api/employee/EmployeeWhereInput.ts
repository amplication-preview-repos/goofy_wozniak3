import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ResponseListRelationFilter } from "../response/ResponseListRelationFilter";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { ReminderListRelationFilter } from "../reminder/ReminderListRelationFilter";

export type EmployeeWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  responses?: ResponseListRelationFilter;
  department?: DepartmentWhereUniqueInput;
  reminders?: ReminderListRelationFilter;
};
