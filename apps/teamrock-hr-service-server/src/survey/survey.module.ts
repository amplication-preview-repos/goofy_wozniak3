import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SurveyModuleBase } from "./base/survey.module.base";
import { SurveyService } from "./survey.service";
import { SurveyController } from "./survey.controller";
import { SurveyResolver } from "./survey.resolver";

@Module({
  imports: [SurveyModuleBase, forwardRef(() => AuthModule)],
  controllers: [SurveyController],
  providers: [SurveyService, SurveyResolver],
  exports: [SurveyService],
})
export class SurveyModule {}
