import { ResponseCreateNestedManyWithoutEmployeesInput } from "./ResponseCreateNestedManyWithoutEmployeesInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { ReminderCreateNestedManyWithoutEmployeesInput } from "./ReminderCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  responses?: ResponseCreateNestedManyWithoutEmployeesInput;
  department?: DepartmentWhereUniqueInput | null;
  reminders?: ReminderCreateNestedManyWithoutEmployeesInput;
};
