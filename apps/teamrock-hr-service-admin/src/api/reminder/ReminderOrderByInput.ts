import { SortOrder } from "../../util/SortOrder";

export type ReminderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  sentAt?: SortOrder;
  employeeId?: SortOrder;
};
