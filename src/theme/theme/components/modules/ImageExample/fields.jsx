import React from 'react';
import { ModuleFields, TextField } from '@hubspot/cms-components/fields';

export const fields = (
  <ModuleFields>
    <FieldGroup label="Content Module" name="groupContent">
      <ImageField
        name="image_field"
        label="Image"
        required={false}
        locked={false}
        responsive={true}
        resizable={true}
        showLoading={false}
        default={{
          size_type: 'exact',
          src: '',
          alt: 'image-alt-text',
          loading: 'lazy',
          width: 128,
          height: 128,
          max_width: 128,
          max_height: 128,
        }}
      />
    </FieldGroup>
  </ModuleFields>
);
