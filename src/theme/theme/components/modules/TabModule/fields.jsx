import {
  ModuleFields,
  TextField,
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';

export const fields = (
  <ModuleFields>
        <RepeatedFieldGroup
      label="Tab Items"
      name="tab_items">

        <TextField label="Tab Title" name="tab_title" default="Tab Title" />
        <TextField
          label="Tab Content"
          name="tab_content"     
        default="This is the content for the Tab item. You can add any text or HTML content here."    
        type="textarea"
         />
      </RepeatedFieldGroup>

  </ModuleFields>
);