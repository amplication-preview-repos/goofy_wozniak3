import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type ReminderCreateInput = {
  content?: string | null;
  sentAt?: Date | null;
  employee?: EmployeeWhereUniqueInput | null;
};
