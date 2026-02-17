import React from 'react';
import { logInfo } from '@hubspot/cms-components';
// import this statement for heading component
import HeadingComponent from '../../components/HeadingComponent/HeadingComponent.jsx';

export function Component(props) {
  const {
    heading_group: {
      headingAndTextHeadingLevel,
      headingStyleVariant,
      headingAndTextHeading,
      headingStyleColor,
    },
    // when use multiple heading component
    second_heading_group: {
      headingAndTextHeadingLevel: headingAndTextHeadingLevelV2,
      headingStyleVariant: headingStyleVariantV2,
      headingAndTextHeading: headingAndTextHeadingV2,
      headingStyleColor: headingStyleColorV2,
    },
    // when use multiple heading component with repeater
    third_heading_group = [],
  } = props;

  logInfo(props, 'props');
  return (
    <>
      <div className="Heading-container">
        {headingAndTextHeading && (
          <HeadingComponent
            headingLevel={headingAndTextHeadingLevel}
            headingStyleVariant={headingStyleVariant}
            heading={headingAndTextHeading}
            headingStyleColor={headingStyleColor}
          />
        )}
      </div>

      {/* when use multiple heading components */}
      <div className="Second-Heading-container">
        {headingAndTextHeadingV2 && (
          <HeadingComponent
            headingLevel={headingAndTextHeadingLevelV2}
            headingStyleVariant={headingStyleVariantV2}
            heading={headingAndTextHeadingV2}
            headingStyleColor={headingStyleColorV2}
          />
        )}
      </div>

      {/* when use multiple heading components with repeater */}
      <div className="third-heading-container">
        {Array.isArray(props.third_heading_group) &&
          props.third_heading_group.map((heading, index) => (
            <div className="heading" key={index}>
              {heading?.headingAndTextHeading && (
                <HeadingComponent
                  headingLevel={heading.headingAndTextHeadingLevel}
                  headingStyleVariant={heading.headingStyleVariant}
                  heading={heading.headingAndTextHeading}
                  headingStyleColor={heading.headingStyleColor}
                />
              )}
            </div>
          ))}
      </div>
    </>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Heading Example',
};
