import React from 'react';
import {
  ModuleFields,
  TextField,
  RepeaterFieldsGroup,
} from '@hubspot/cms-components/fields';

export const fields = (
  <ModuleFields>
        <RepeaterFieldsGroup
      label="Accordion Items"
      name="accordion_items"    >

        <TextField label="Title" name="title" default="Accordion Title" />
        <TextField
          label="Content"
          name="content"     
        default="This is the content for the accordion item. You can add any text or HTML content here."    
        type="textarea"
         />
      </RepeaterFieldsGroup>

  </ModuleFields>
);