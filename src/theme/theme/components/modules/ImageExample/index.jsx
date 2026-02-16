import React from 'react';
import { logInfo } from '@hubspot/cms-components';
// Import this statement for image component
import RenderImage from '../../components/ImageComponent/imageRenderer.jsx';

export function Component(props) {
  const {
    groupContent: { image_field },
  } = props;

  logInfo(props, 'props');
  return (
    <>
      <div className="image-container">
        <RenderImage imageField={image_field} />
      </div>
    </>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Image Example Module',
};
