import React from 'react';
import {
    AlignmentField,
    BooleanField,
    ChoiceField,
    FieldGroup,
    ImageField,
    ModuleFields,
    NumberField,
    TextAlignmentField
} from '@hubspot/cms-components/fields';
import HeadingStyles from '../../components/HeadingComponent/HeadingStyle.jsx';
import HeadingContent from '../../components/HeadingComponent/HeadingContent.jsx';
import ButtonContent from '../../components/ButtonComponent/ButtonContent.jsx';
import ButtonStyle from '../../components/ButtonComponent/ButtonStyle.jsx';
import RichTextContent from '../../components/fieldLibrary/RichTextField/index.jsx';
import CommonStylesSpacingFields from '../../components/SpacingStyleComponent/CommonStylesSpacingFields.jsx';
import CustomClassField from '../../components/fieldLibrary/CustomClassField';
import CommonStylesSpacingContentFields from '../../components/SpacingStyleComponent/CommonStylesSpacingContentFields.jsx';

const buttonFieldVisibility = {
    boolean_operator: 'OR',
    criteria: [{
        controlling_field_path: 'groupContent.showButton',
        controlling_value_regex: 'true',
        operator: 'EQUAL',
    }]
}

const matchButtonType = {
    controlling_field_path: 'groupContent.groupButton.buttonContentType',
    operator: 'MATCHES_REGEX',
    controlling_value_regex: '^button$'
};

const matchCtaType = {
    controlling_field_path: 'groupContent.groupButton.buttonContentType',
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

const bgVideoFieldVisibility = {
    boolean_operator: 'AND',
    criteria: [
        {
            controlling_field_path: 'groupStyle.groupBackground.background_option',
            controlling_value_regex: '^video_bg$',
            operator: 'MATCHES_REGEX',
        },
    ],
};

const groupAlignmentEnable = {
    boolean_operator: 'AND',
    criteria: [
        matchButtonType,
        {
            controlling_field_path: 'groupStyle.groupAlignment.groupAlignmentEnable',
            operator: 'MATCHES_REGEX',
            controlling_value_regex: '^true$'
        }
    ]
}

export const fields = (
    <ModuleFields>

        <FieldGroup
            label='Content Module'
            name='groupContent'
            display='drilldown'
        >
            <HeadingContent />
            <RichTextContent
                label='Description'
                richTextDefault='<p>Write a description highlighting the functionality, benefits, and uniqueness of your feature. A couple of sentences here is just right.</p>'
                featureSet='text'
            />
            <ImageField
                name="image_field"
                label="Image"
                required={false}
                locked={false}
                responsive={true}
                resizable={true}
                showLoading={false}
                default={{
                    size_type: 'exact',
                    src: '',
                    alt: 'image-alt-text',
                    loading: 'lazy',
                    width: 128,
                    height: 128,
                    max_width: 128,
                    max_height: 128,
                }}
            />


            <BooleanField
                label='Show Button'
                name='showButton'
                display='toggle'
                default={true}
            />
            <FieldGroup
                label='Button Section'
                name='groupButton'
                display='inline'
                visibilityRules='ADVANCED'
                advancedVisibility={buttonFieldVisibility}
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

            </FieldGroup>
        </FieldGroup>
        <CommonStylesSpacingContentFields bgVideoFieldVisibility={bgVideoFieldVisibility} />


        <CustomClassField />

        <FieldGroup
            label='Styles'
            name='groupStyle'
            tab='STYLE'
        >
            <CommonStylesSpacingFields />

            <FieldGroup
                label='Content Section'
                name='groupContent'
                display='accordion'
            >

                <HeadingStyles headingStyleAsDefault='h3' />

                <FieldGroup
                    label='Button Section'
                    name='groupButton'
                    display='inline'
                >
                    <ButtonStyle
                        buttonStyleDefault='primary'
                        buttonSizeDefault='medium'
                        buttonSizeVisibility={buttonFieldVisibility}
                        buttonStyleVisibility={buttonFieldVisibility}
                    />
                </FieldGroup>

            </FieldGroup>



            <FieldGroup
                label='Content Alignment Section'
                name='groupAlignment'
                display='accordion'
            >
                <BooleanField
                    name="groupAlignmentEnable"
                    label='Change Alignment Width'
                    display='toggle'
                    default={false}
                />
                <FieldGroup
                    name='groupAlignmentOptions'
                    label='Alignment Options'
                    display='inline'>

                    <NumberField
                        name="contentWidth"
                        label="Content Width"
                        required={false}
                        locked={false}
                        display="slider"
                        min={0}
                        max={1180}
                        step={1}
                        prefix=""
                        suffix=""
                        default={null}
                        placeholder="0"
                        visibilityRules='ADVANCED'
                        advancedVisibility={groupAlignmentEnable}
                    />

                    <ChoiceField
                        name="boxAlignment"
                        label="Box Alignment"
                        required={false}
                        locked={false}
                        multiple={false}
                        display="select"
                        choices={[
                            ['margin-left', 'Left'],
                            ['margin-auto', 'Center'],
                            ['margin-right', 'Right']
                        ]}
                        default="margin-left"
                        visibilityRules='ADVANCED'
                        advancedVisibility={groupAlignmentEnable}
                    />
                    <TextAlignmentField
                        name="textAlignment"
                        label="Text Alignment"
                        required={false}
                        default={{
                            text_align: 'LEFT',
                        }}
                        visibilityRules='ADVANCED'
                        advancedVisibility={groupAlignmentEnable}
                    />
                </FieldGroup>
            </FieldGroup>
        </FieldGroup>
    </ModuleFields>
);