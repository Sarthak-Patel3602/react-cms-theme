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
            headingStyleColor
        },
        second_heading_group:{
           headingAndTextHeadingLevelV2 = headingAndTextHeadingLevel,
           headingStyleVariantV2 = headingStyleVariant,
           headingAndTextHeadingV2 = headingAndTextHeading,
           headingStyleColorV2 = headingStyleColor
        }
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
        </>
    );
}

export { fields } from './fields.jsx';

export const meta = {
    label: 'Heading Example',
};