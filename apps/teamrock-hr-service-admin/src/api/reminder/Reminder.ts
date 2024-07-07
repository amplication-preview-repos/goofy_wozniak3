import { Employee } from "../employee/Employee";

export type Reminder = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  sentAt: Date | null;
  employee?: Employee | null;
};
