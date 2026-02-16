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
        </>
    );
}

export { fields } from './fields.jsx';

export const meta = {
    label: 'Heading Example',
};