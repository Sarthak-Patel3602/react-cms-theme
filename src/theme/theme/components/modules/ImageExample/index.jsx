import React from 'react';
import { logInfo } from '@hubspot/cms-components';

export function Component(props) {
  const {} = props;

  logInfo(props, 'props');
  return <></>;
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Module Name',
};
