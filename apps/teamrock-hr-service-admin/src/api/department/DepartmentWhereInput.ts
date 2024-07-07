import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";

export type DepartmentWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  manager?: StringNullableFilter;
  employees?: EmployeeListRelationFilter;
};
