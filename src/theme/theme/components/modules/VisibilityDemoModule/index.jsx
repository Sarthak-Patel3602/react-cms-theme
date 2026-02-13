import React from 'react';
import { logInfo } from '@hubspot/cms-components';
import ResponsiveSpacingWrapper from '../../components/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';

export function Component(props) {
  const { module_id, sub_heading } = props;

  logInfo(props, 'props');
  return (
    <>
      <ResponsiveSpacingWrapper
        moduleId={props?.module?.module_id}
        fields={props?.fieldValues}
      >
        {show_heading && <h1>{sub_heading}</h1>}
      </ResponsiveSpacingWrapper>
    </>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Module Name',
};
