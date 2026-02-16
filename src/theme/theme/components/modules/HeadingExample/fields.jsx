import React from 'react';
import {
    ModuleFields,
    TextField,
    FieldGroup
} from '@hubspot/cms-components/fields';
// import both statement for heading
import HeadingStyles from '../../components/HeadingComponent/HeadingStyle.jsx';
import HeadingContent from '../../components/HeadingComponent/HeadingContent.jsx';

export const fields = (
    <ModuleFields>
           <FieldGroup
                    label='Heading Group'
                    name='heading_group'
                >
                <HeadingContent />
                <HeadingStyles headingStyleAsDefault='h3' />
        </FieldGroup>
    </ModuleFields>
);