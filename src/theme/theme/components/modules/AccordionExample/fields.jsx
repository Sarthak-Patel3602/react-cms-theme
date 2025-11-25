import {
    ModuleFields,
    RepeatedFieldGroup,
    TextField,
    RichtextField,
} from '@hubspot/cms-components/fields';


export const fields = (
    <ModuleFields>

            <RepeatedFieldGroup
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
            </RepeatedFieldGroup>


    </ModuleFields>
);