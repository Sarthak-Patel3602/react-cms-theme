import React from 'react';
import {
  BooleanField,
  ChoiceField,
  ColorField,
  DateField,
  DateTimeField,
  EmailField,
  FieldGroup,
  FileField,
  ImageField,
  ModuleFields,
  NumberField,
  RichTextField,
  TextField,
} from '@hubspot/cms-components/fields';

export const fields = (
  <ModuleFields>
    {/* ========================== */}
    {/* CONTENT GROUP */}
    {/* ========================== */}
    <FieldGroup label="Content Section" name="groupContent" display="inline">

      <TextField
        name="singleLineText"
        label="Single Line Text"
        placeholder="Enter text"
        default="This is default text"
      />

      <BooleanField
        name="showSection"
        label="Show Section?"
        default={true}
      />

      <NumberField
        name="numberValue"
        label="Number Value"
        helpText="Enter any number"
        default={10}
      />

      <ColorField
        name="colorPicker"
        label="Select Color"
        default="#ff0000"
      />

      <RichTextField
        name="richTextContentHTML"
        label="Rich Text Content"
        default="<p>This is default rich text content.</p>"
        featureSet="text"
      />

    </FieldGroup>

    {/* ========================== */}
    {/* OPTIONS GROUP */}
    {/* ========================== */}
    <FieldGroup label="Options" name="groupOptions" display="inline">

      <ChoiceField
        name="dropdownOption"
        label="Dropdown Option"
        multiple={false}
        display="select"
        choices={[
          ["option-1", "Option 1"],
          ["option-2", "Option 2"],
        ]}
        default="option-1"
      />

      <ChoiceField
        name="radioOption"
        label="Radio Option"
        multiple={false}
        display="radio"
        choices={[
          ["option-1", "Option 1"],
          ["option-2", "Option 2"],
        ]}
        default="option-1"
      />

      <ChoiceField
        name="checkboxGroup"
        label="Checkbox Group"
        multiple={true}
        display="checkbox"
        choices={[
          ["option-1", "Option 1"],
          ["option-2", "Option 2"],
          ["option-3", "Option 3"],
        ]}
        default="option-1"
      />

    </FieldGroup>

    {/* ========================== */}
    {/* MEDIA FIELDS */}
    {/* ========================== */}
    <FieldGroup label="Media Fields" name="mediaFields" display="inline">

      <ImageField
        name="image"
        label="Image"
        resizable={true}
      />

      <FileField
        name="fileUpload"
        label="Upload File"
        helpText="Supported files: PDF, Docs, ZIP etc."
      />

    </FieldGroup>

    {/* ========================== */}
    {/* SPECIAL INPUTS */}
    {/* ========================== */}
    <FieldGroup label="Special Inputs" name="specialInputs" display="inline">

      <EmailField
        name="contactEmail"
        label="Contact Email"
      />

      <DateField
        name="dateField"
        label="Select Date"
      />

      <DateTimeField
        name="eventDateTime"
        label="Event Date & Time"
      />

    </FieldGroup>

  </ModuleFields>
);
