/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { QuestionService } from "../question.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { QuestionCreateInput } from "./QuestionCreateInput";
import { Question } from "./Question";
import { QuestionFindManyArgs } from "./QuestionFindManyArgs";
import { QuestionWhereUniqueInput } from "./QuestionWhereUniqueInput";
import { QuestionUpdateInput } from "./QuestionUpdateInput";
import { ResponseFindManyArgs } from "../../response/base/ResponseFindManyArgs";
import { Response } from "../../response/base/Response";
import { ResponseWhereUniqueInput } from "../../response/base/ResponseWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class QuestionControllerBase {
  constructor(
    protected readonly service: QuestionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Question })
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createQuestion(
    @common.Body() data: QuestionCreateInput
  ): Promise<Question> {
    return await this.service.createQuestion({
      data: {
        ...data,

        survey: data.survey
          ? {
              connect: data.survey,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        text: true,

        survey: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Question] })
  @ApiNestedQuery(QuestionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async questions(@common.Req() request: Request): Promise<Question[]> {
    const args = plainToClass(QuestionFindManyArgs, request.query);
    return this.service.questions({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        text: true,

        survey: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Question })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async question(
    @common.Param() params: QuestionWhereUniqueInput
  ): Promise<Question | null> {
    const result = await this.service.question({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        text: true,

        survey: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Question })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateQuestion(
    @common.Param() params: QuestionWhereUniqueInput,
    @common.Body() data: QuestionUpdateInput
  ): Promise<Question | null> {
    try {
      return await this.service.updateQuestion({
        where: params,
        data: {
          ...data,

          survey: data.survey
            ? {
                connect: data.survey,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          text: true,

          survey: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Question })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteQuestion(
    @common.Param() params: QuestionWhereUniqueInput
  ): Promise<Question | null> {
    try {
      return await this.service.deleteQuestion({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          text: true,

          survey: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/responses")
  @ApiNestedQuery(ResponseFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Response",
    action: "read",
    possession: "any",
  })
  async findResponses(
    @common.Req() request: Request,
    @common.Param() params: QuestionWhereUniqueInput
  ): Promise<Response[]> {
    const query = plainToClass(ResponseFindManyArgs, request.query);
    const results = await this.service.findResponses(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        answer: true,

        employee: {
          select: {
            id: true,
          },
        },

        question: {
          select: {
            id: true,
          },
        },

        survey: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/responses")
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "update",
    possession: "any",
  })
  async connectResponses(
    @common.Param() params: QuestionWhereUniqueInput,
    @common.Body() body: ResponseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      responses: {
        connect: body,
      },
    };
    await this.service.updateQuestion({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/responses")
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "update",
    possession: "any",
  })
  async updateResponses(
    @common.Param() params: QuestionWhereUniqueInput,
    @common.Body() body: ResponseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      responses: {
        set: body,
      },
    };
    await this.service.updateQuestion({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/responses")
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "update",
    possession: "any",
  })
  async disconnectResponses(
    @common.Param() params: QuestionWhereUniqueInput,
    @common.Body() body: ResponseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      responses: {
        disconnect: body,
      },
    };
    await this.service.updateQuestion({
      where: params,
      data,
      select: { id: true },
    });
  }
}