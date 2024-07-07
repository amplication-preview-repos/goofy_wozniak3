import { EmployeeUpdateManyWithoutDepartmentsInput } from "./EmployeeUpdateManyWithoutDepartmentsInput";

export type DepartmentUpdateInput = {
  name?: string | null;
  manager?: string | null;
  employees?: EmployeeUpdateManyWithoutDepartmentsInput;
};
