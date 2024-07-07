import { Survey } from "../survey/Survey";
import { Response } from "../response/Response";

export type Question = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  text: string | null;
  survey?: Survey | null;
  responses?: Array<Response>;
};
