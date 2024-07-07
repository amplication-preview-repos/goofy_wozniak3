/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { ResponseUpdateManyWithoutEmployeesInput } from "./ResponseUpdateManyWithoutEmployeesInput";
import { Type } from "class-transformer";
import { DepartmentWhereUniqueInput } from "../../department/base/DepartmentWhereUniqueInput";
import { ReminderUpdateManyWithoutEmployeesInput } from "./ReminderUpdateManyWithoutEmployeesInput";

@InputType()
class EmployeeUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => ResponseUpdateManyWithoutEmployeesInput,
  })
  @ValidateNested()
  @Type(() => ResponseUpdateManyWithoutEmployeesInput)
  @IsOptional()
  @Field(() => ResponseUpdateManyWithoutEmployeesInput, {
    nullable: true,
  })
  responses?: ResponseUpdateManyWithoutEmployeesInput;

  @ApiProperty({
    required: false,
    type: () => DepartmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DepartmentWhereUniqueInput)
  @IsOptional()
  @Field(() => DepartmentWhereUniqueInput, {
    nullable: true,
  })
  department?: DepartmentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ReminderUpdateManyWithoutEmployeesInput,
  })
  @ValidateNested()
  @Type(() => ReminderUpdateManyWithoutEmployeesInput)
  @IsOptional()
  @Field(() => ReminderUpdateManyWithoutEmployeesInput, {
    nullable: true,
  })
  reminders?: ReminderUpdateManyWithoutEmployeesInput;
}

export { EmployeeUpdateInput as EmployeeUpdateInput };