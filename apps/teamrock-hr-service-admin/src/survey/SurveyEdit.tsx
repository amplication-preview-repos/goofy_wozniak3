import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { QuestionTitle } from "../question/QuestionTitle";
import { ResponseTitle } from "../response/ResponseTitle";

export const SurveyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Description" multiline source="description" />
        <SelectInput
          source="frequency"
          label="Frequency"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="questions"
          reference="Question"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QuestionTitle} />
        </ReferenceArrayInput>
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
