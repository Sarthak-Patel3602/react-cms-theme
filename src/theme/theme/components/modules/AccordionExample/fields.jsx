import {
    FieldGroup,
    ModuleFields,
    RepeaterField,
    TextField,
    RichtextField,
} from '@hubspot/cms-components/fields';


export const fields = (
    <ModuleFields>

        <FieldGroup
            label='Content Module'
            name='groupContent'
            display='drilldown'
        >
            <RepeaterField
                name='accordionItems'
                label='Accordion Items'
            >
                <TextField
                    name='question'
                    label='Question'
                    required={true}
                    defaultValue='Sample Question'
                />
                <RichtextField
                    name='answer'
                    label='Answer'
                    required={true}
                    defaultValue='Sample Answer'
                />
            </RepeaterField>

        </FieldGroup>


    </ModuleFields>
);