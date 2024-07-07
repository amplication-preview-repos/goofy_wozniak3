import { Response } from "../response/Response";
import { Department } from "../department/Department";
import { Reminder } from "../reminder/Reminder";

export type Employee = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  responses?: Array<Response>;
  department?: Department | null;
  reminders?: Array<Reminder>;
};
