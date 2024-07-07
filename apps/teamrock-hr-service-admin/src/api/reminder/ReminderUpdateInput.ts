import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type ReminderUpdateInput = {
  content?: string | null;
  sentAt?: Date | null;
  employee?: EmployeeWhereUniqueInput | null;
};
