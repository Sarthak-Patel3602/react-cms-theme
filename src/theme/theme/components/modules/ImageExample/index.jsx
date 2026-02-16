import React from 'react';
import { logInfo } from '@hubspot/cms-components';
// Import this statement for image component
import RenderImage from '../../components/ImageComponent/imageRenderer.jsx';

export function Component(props) {
  const {
    groupContent: { image_field, image_link_field, image_group = [] },
  } = props;

  logInfo(props, 'props');
  return (
    <>
      {/* image with link without repeater */}
      <div className="image-container">
        <a
          href={image_link_field?.url?.href_with_scheme || '#'}
          target={image_link_field.open_in_new_tab ? '_blank' : '_self'}
          rel={
            [
              image_link_field.no_follow ? 'nofollow' : '',
              image_link_field.sponsored ? 'sponsored' : '',
              image_link_field.user_generated_content ? 'ugc' : '',
              image_link_field.rel || '',
            ]
              .filter(Boolean)
              .join(' ') || undefined
          }
        >
          <RenderImage imageField={image_field} />
        </a>
      </div>

      {/* image with link with repeater */}
      <div className="image-container-with-repeater">
        {image_group.map((image_link_field, index) => {
          <div className="image" key={index}>
            <a
              href={image_link_field?.url?.href_with_scheme || '#'}
              target={image_link_field.open_in_new_tab ? '_blank' : '_self'}
              rel={
                [
                  image_link_field.no_follow ? 'nofollow' : '',
                  image_link_field.sponsored ? 'sponsored' : '',
                  image_link_field.user_generated_content ? 'ugc' : '',
                  image_link_field.rel || '',
                ]
                  .filter(Boolean)
                  .join(' ') || undefined
              }
            >
              <RenderImage imageField={image_field} />
            </a>
          </div>;
        })}
      </div>
    </>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Image Example Module',
};
