import React from 'react';
import { logInfo } from '@hubspot/cms-components';

export function Component(props) {
    const {
        heading_group
    } = props;

    logInfo(props, 'props');
    return (
        <>
            <div className="Heading-container">
                {headingAndTextHeading && (
                    <HeadingComponent headingLevel={headingAndTextHeadingLevel} headingStyleVariant={headingStyleVariant} heading={headingAndTextHeading} headingStyleColor={headingStyleColor} />
                )}
            </div>
        </>
    );
}

export { fields } from './fields.jsx';

export const meta = {
    label: 'Heading Example',
};