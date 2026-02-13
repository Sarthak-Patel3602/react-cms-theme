import React from 'react';
import {
  ModuleFields,
  TextField,
  FieldGroup,
  BooleanField,
} from '@hubspot/cms-components/fields';

export const fields = (
  <ModuleFields>
    <FieldGroup label="Content Module" name="groupContent">
      <BooleanField
        name="show_heading"
        label="Show Heading"
        display="toggle"
        default={false}
      />

      <TextField
        label="Sub Heading"
        name="sub_heading"
        default="Best Deals"
        visibility={{
          controlling_field_path: 'groupContent.show_heading',
          operator: 'EQUAL',
          controlling_value_regex: 'true',
        }}
      />
    </FieldGroup>
  </ModuleFields>
);
