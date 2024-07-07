import { ResponseUpdateManyWithoutEmployeesInput } from "./ResponseUpdateManyWithoutEmployeesInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { ReminderUpdateManyWithoutEmployeesInput } from "./ReminderUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  responses?: ResponseUpdateManyWithoutEmployeesInput;
  department?: DepartmentWhereUniqueInput | null;
  reminders?: ReminderUpdateManyWithoutEmployeesInput;
};
