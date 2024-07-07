import { SortOrder } from "../../util/SortOrder";

export type ResponseOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  answer?: SortOrder;
  employeeId?: SortOrder;
  questionId?: SortOrder;
  surveyId?: SortOrder;
};
