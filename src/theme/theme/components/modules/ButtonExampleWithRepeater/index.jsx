import React from 'react';
import { logInfo } from '@hubspot/cms-components';
// import this statement for button component
import { Button } from '../../components/ButtonComponent/ButtonComponent.jsx';
import { getLinkFieldHref, getLinkFieldRel, getLinkFieldTarget } from '../../utils/content-fields.jsx';



export function Component(props) {
    const {
        showButton,
        buttonGroup = []
    } = props;

    // const buttonHref = getLinkFieldHref(link);
    // const buttonRel = getLinkFieldRel(link);
    // const buttonTarget = getLinkFieldTarget(link);


    logInfo(props, 'props');
    return (
        <>
            {showButton && buttonGroup.map((item, index) => (
                <Button
                    key={index}
                    buttonSize={item.buttonStyleSize}
                    buttonStyle={item.buttonStyleVariant}
                    href={getLinkFieldHref(item.buttonContentLink)}
                    rel={getLinkFieldRel(item.buttonContentLink)}
                    target={getLinkFieldTarget(item.buttonContentLink)}
                    showIcon={item.buttonContentShowIcon}
                    iconFieldPath={`buttonGroup[${index}].buttonContentIcon`}
                    iconPosition={item.buttonContentIconPosition}
                    additionalClassArray={['button-container__button']}
                    ctaFieldpath={`buttonGroup[${index}].ctaField`}
                    buttonType={item.buttonContentType}
                >
                    {item.buttonContentText}
                </Button>
            ))}
        </>
    );
}

export { fields } from './fields.jsx';

export const meta = {
    label: 'Button Example With Repeater Module',
};