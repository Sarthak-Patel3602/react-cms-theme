import React from 'react';
import {
    BooleanField,
    FieldGroup,
    RepeatedFieldGroup,
    ModuleFields,
} from '@hubspot/cms-components/fields';

import ButtonContent from '../../components/ButtonComponent/ButtonContent.jsx';
import ButtonStyle from '../../components/ButtonComponent/ButtonStyle.jsx';


const matchButtonType = {
    // controlling_field_path: 'groupContent.groupButton.buttonContentType',
    controlling_field_path: 'groupContent.groupButtons.buttonContentType',
    operator: 'MATCHES_REGEX',
    controlling_value_regex: '^button$'
};

const matchCtaType = {
    // controlling_field_path: 'groupContent.groupButton.buttonContentType',
    controlling_field_path: 'groupContent.groupButtons.buttonContentType',
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
            controlling_field_path: 'groupContent.groupButton.buttonContentShowIcon',
            operator: 'MATCHES_REGEX',
            controlling_value_regex: '^true$'
        }
    ]
};



export const fields = (
    <ModuleFields>

        <FieldGroup label="Content Module" name="groupContent" display="drilldown">
            {/* <RepeatedFieldGroup
            label='Button Section'
            name='groupButtons'
            display='inline'
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
                                    buttonSizeVisibility= ''
                                    buttonStyleVisibility= ''
                                />
        </RepeatedFieldGroup> */}
            <RepeatedFieldGroup
                label="Button Section"
                name="groupButtons"
                display="inline"
            >
                <ButtonContent
                   namePrefix="groupButtons"
                    textDefault="Learn more"
                    linkDefault={{ open_in_new_tab: true }}
                    iconPositionDefault="left"
                    buttonVisibility={buttonTypeVisibility}
                    ctaVisibility={ctaTypeVisibility}
                    iconVisibility={iconTypeVisibility}
                />

                <ButtonStyle
                    namePrefix="groupButtons"
                    buttonStyleDefault="primary"
                    buttonSizeDefault="medium"
                />
            </RepeatedFieldGroup>
        </FieldGroup>

    </ModuleFields>
);
