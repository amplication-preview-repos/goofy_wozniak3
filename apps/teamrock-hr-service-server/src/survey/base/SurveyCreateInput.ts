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
  IsEnum,
  ValidateNested,
} from "class-validator";
import { EnumSurveyFrequency } from "./EnumSurveyFrequency";
import { QuestionCreateNestedManyWithoutSurveysInput } from "./QuestionCreateNestedManyWithoutSurveysInput";
import { Type } from "class-transformer";
import { ResponseCreateNestedManyWithoutSurveysInput } from "./ResponseCreateNestedManyWithoutSurveysInput";

@InputType()
class SurveyCreateInput {
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
  title?: string | null;

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
  description?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumSurveyFrequency,
  })
  @IsEnum(EnumSurveyFrequency)
  @IsOptional()
  @Field(() => EnumSurveyFrequency, {
    nullable: true,
  })
  frequency?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => QuestionCreateNestedManyWithoutSurveysInput,
  })
  @ValidateNested()
  @Type(() => QuestionCreateNestedManyWithoutSurveysInput)
  @IsOptional()
  @Field(() => QuestionCreateNestedManyWithoutSurveysInput, {
    nullable: true,
  })
  questions?: QuestionCreateNestedManyWithoutSurveysInput;

  @ApiProperty({
    required: false,
    type: () => ResponseCreateNestedManyWithoutSurveysInput,
  })
  @ValidateNested()
  @Type(() => ResponseCreateNestedManyWithoutSurveysInput)
  @IsOptional()
  @Field(() => ResponseCreateNestedManyWithoutSurveysInput, {
    nullable: true,
  })
  responses?: ResponseCreateNestedManyWithoutSurveysInput;
}

export { SurveyCreateInput as SurveyCreateInput };