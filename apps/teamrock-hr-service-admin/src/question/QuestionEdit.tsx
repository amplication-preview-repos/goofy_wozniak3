import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SurveyTitle } from "../survey/SurveyTitle";
import { ResponseTitle } from "../response/ResponseTitle";

export const QuestionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Text" multiline source="text" />
        <ReferenceInput source="survey.id" reference="Survey" label="Survey">
          <SelectInput optionText={SurveyTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="responses"
          reference="Response"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ResponseTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
