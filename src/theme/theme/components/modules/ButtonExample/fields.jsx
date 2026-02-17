import React from 'react';
import {
    ModuleFields,
    FieldGroup,
    BooleanField
} from '@hubspot/cms-components/fields';
import ButtonContent from '../../components/ButtonComponent/ButtonContent.jsx';
import ButtonStyle from '../../components/ButtonComponent/ButtonStyle.jsx';



const matchButtonType = {
    controlling_field_path: 'buttonGroup.buttonContentType',
    operator: 'MATCHES_REGEX',
    controlling_value_regex: '^button$'
};

const matchCtaType = {
    controlling_field_path: 'buttonGroup.buttonContentType',
    operator: 'MATCHES_REGEX',
    controlling_value_regex: '^cta$'
};

const buttonTypeVisibility = {
    boolean_operator: 'OR',
    criteria: [matchButtonType]
};

const ctaTypeVisibility = {
    boolean_operator: 'OR',
    criteria: [matchCtaType]
};

const iconTypeVisibility = {
    boolean_operator: 'AND',
    criteria: [
        matchButtonType,
        {
            controlling_field_path: 'buttonGroup.buttonContentShowIcon',
            operator: 'MATCHES_REGEX',
            controlling_value_regex: '^true$'
        }
    ]
};


export const fields = (
    <ModuleFields>
        <BooleanField
            label='Show Button'
            name='showButton'
            display='toggle'
            default={true}
        />

        <FieldGroup
            label='Button Group'
            name='buttonGroup'
            display='inline'
            visibilityRules='ADVANCED'
            visibility={{
                controlling_field_path: 'showButton',
                operator: 'EQUAL',
                controlling_value_regex: 'true',
            }}

        >
            <ButtonContent
                textDefault='Learn more'
                linkDefault={{
                    open_in_new_tab: true,
                }}
                iconPositionDefault='left'
                buttonVisibility={buttonTypeVisibility}
                ctaVisibility={ctaTypeVisibility}
                iconVisibility={iconTypeVisibility}
            />
            <ButtonStyle
                buttonStyleDefault='primary'
                buttonSizeDefault='medium'
            />
        </FieldGroup>
    </ModuleFields >
);