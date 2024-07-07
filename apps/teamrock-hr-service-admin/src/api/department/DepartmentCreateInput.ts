import { EmployeeCreateNestedManyWithoutDepartmentsInput } from "./EmployeeCreateNestedManyWithoutDepartmentsInput";

export type DepartmentCreateInput = {
  name?: string | null;
  manager?: string | null;
  employees?: EmployeeCreateNestedManyWithoutDepartmentsInput;
};
