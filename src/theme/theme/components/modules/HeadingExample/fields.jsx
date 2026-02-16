import React from 'react';
import {
  ModuleFields,
  TextField,
  FieldGroup,
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';
// import both statement for heading
import HeadingStyles from '../../components/HeadingComponent/HeadingStyle.jsx';
import HeadingContent from '../../components/HeadingComponent/HeadingContent.jsx';

export const fields = (
  <ModuleFields>
    <FieldGroup label="Heading Group" name="heading_group">
      <HeadingContent />
      <HeadingStyles headingStyleAsDefault="h3" />
    </FieldGroup>
    {/* when use multiple heading */}
    <FieldGroup label="Second Heading Group" name="second_heading_group">
      <HeadingContent />
      <HeadingStyles headingStyleAsDefault="h3" />
    </FieldGroup>

    {/* Multiple heading component with repeater */}
    <RepeatedFieldGroup
      name="third_heading_group"
      label="Third Heading Group"
      occurrence={{
        min: 1,
        max: 10,
        default: 1,
      }}
    >
      <HeadingContent />
      <HeadingStyles headingStyleAsDefault="h3" />
    </RepeatedFieldGroup>
  </ModuleFields>
);
