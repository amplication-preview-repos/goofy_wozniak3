/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Reminder as PrismaReminder,
  Employee as PrismaEmployee,
} from "@prisma/client";

export class ReminderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ReminderCountArgs, "select">): Promise<number> {
    return this.prisma.reminder.count(args);
  }

  async reminders(
    args: Prisma.ReminderFindManyArgs
  ): Promise<PrismaReminder[]> {
    return this.prisma.reminder.findMany(args);
  }
  async reminder(
    args: Prisma.ReminderFindUniqueArgs
  ): Promise<PrismaReminder | null> {
    return this.prisma.reminder.findUnique(args);
  }
  async createReminder(
    args: Prisma.ReminderCreateArgs
  ): Promise<PrismaReminder> {
    return this.prisma.reminder.create(args);
  }
  async updateReminder(
    args: Prisma.ReminderUpdateArgs
  ): Promise<PrismaReminder> {
    return this.prisma.reminder.update(args);
  }
  async deleteReminder(
    args: Prisma.ReminderDeleteArgs
  ): Promise<PrismaReminder> {
    return this.prisma.reminder.delete(args);
  }

  async getEmployee(parentId: string): Promise<PrismaEmployee | null> {
    return this.prisma.reminder
      .findUnique({
        where: { id: parentId },
      })
      .employee();
  }
}
