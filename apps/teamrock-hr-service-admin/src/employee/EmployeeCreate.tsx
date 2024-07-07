import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ResponseTitle } from "../response/ResponseTitle";
import { DepartmentTitle } from "../department/DepartmentTitle";
import { ReminderTitle } from "../reminder/ReminderTitle";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="FirstName" source="firstName" />
        <TextInput label="LastName" source="lastName" />
        <TextInput label="Email" source="email" type="email" />
        <ReferenceArrayInput
          source="responses"
          reference="Response"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ResponseTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="department.id"
          reference="Department"
          label="Department"
        >
          <SelectInput optionText={DepartmentTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="reminders"
          reference="Reminder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReminderTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
