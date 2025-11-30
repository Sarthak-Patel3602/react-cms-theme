import {
  ModuleFields,
  TextField,
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';

export const fields = (
  <ModuleFields>
        <RepeatedFieldGroup
      label="Accordion Items"
      name="accordion_items"    >

        <TextField label="Title" name="title" default="Accordion Title" />
        <TextField
          label="Content"
          name="content"     
        default="This is the content for the accordion item. You can add any text or HTML content here."    
        type="textarea"
         />
      </RepeatedFieldGroup>

  </ModuleFields>
);