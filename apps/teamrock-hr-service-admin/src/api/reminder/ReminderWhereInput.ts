import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type ReminderWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  sentAt?: DateTimeNullableFilter;
  employee?: EmployeeWhereUniqueInput;
};
