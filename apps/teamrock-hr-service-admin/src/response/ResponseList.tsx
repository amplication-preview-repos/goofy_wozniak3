import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { QUESTION_TITLE_FIELD } from "../question/QuestionTitle";
import { SURVEY_TITLE_FIELD } from "../survey/SurveyTitle";

export const ResponseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Responses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Answer" source="answer" />
        <ReferenceField
          label="Employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Question"
          source="question.id"
          reference="Question"
        >
          <TextField source={QUESTION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Survey" source="survey.id" reference="Survey">
          <TextField source={SURVEY_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
