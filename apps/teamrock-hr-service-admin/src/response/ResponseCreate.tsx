import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { QuestionTitle } from "../question/QuestionTitle";
import { SurveyTitle } from "../survey/SurveyTitle";

export const ResponseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Answer" multiline source="answer" />
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="question.id"
          reference="Question"
          label="Question"
        >
          <SelectInput optionText={QuestionTitle} />
        </ReferenceInput>
        <ReferenceInput source="survey.id" reference="Survey" label="Survey">
          <SelectInput optionText={SurveyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
