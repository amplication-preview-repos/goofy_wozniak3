import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EmployeeTitle } from "../employee/EmployeeTitle";

export const ReminderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Content" multiline source="content" />
        <DateTimeInput label="SentAt" source="sentAt" />
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
