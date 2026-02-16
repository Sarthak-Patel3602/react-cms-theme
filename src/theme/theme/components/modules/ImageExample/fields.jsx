import React from 'react';
import {
  ModuleFields,
  FieldGroup,
  ImageField,
  LinkField,
} from '@hubspot/cms-components/fields';

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
      <LinkField
        name="image_link_field"
        label="Image Link"
        supportedTypes={['EXTERNAL', 'CONTENT', 'EMAIL_ADDRESS']}
        default={{
          url: { content_id: null, type: 'EXTERNAL', href: '' },
          open_in_new_tab: false,
          no_follow: false,
        }}
      />

      <RepeatedFieldGroup label="Image Group" name="image_group">
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
        <LinkField
          name="image_link_field"
          label="Image Link"
          supportedTypes={['EXTERNAL', 'CONTENT', 'EMAIL_ADDRESS']}
          default={{
            url: { content_id: null, type: 'EXTERNAL', href: '' },
            open_in_new_tab: false,
            no_follow: false,
          }}
        />
      </RepeatedFieldGroup>
    </FieldGroup>
  </ModuleFields>
);
