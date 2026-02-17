import React from 'react';
import { logInfo } from '@hubspot/cms-components';
// import this statement for button component
import { Button } from '../../components/ButtonComponent/ButtonComponent.jsx';


export function Component(props) {
    const {
        showButton,
        buttonGroup: {
            buttonContentText: text,
            buttonContentLink: link,
            buttonContentShowIcon: showIcon,
            buttonContentIconPosition: iconPosition,
            buttonContentType,
            buttonStyleSize,
            buttonStyleVariant,
        }
    } = props;

    const buttonHref = getLinkFieldHref(link);
    const buttonRel = getLinkFieldRel(link);
    const buttonTarget = getLinkFieldTarget(link);


    logInfo(props, 'props');
    return (
        <>
            {showButton && <Button
                buttonSize={buttonStyleSize}
                buttonStyle={buttonStyleVariant}
                href={buttonHref}
                rel={buttonRel}
                target={buttonTarget}
                showIcon={showIcon}
                iconFieldPath='buttonGroup.buttonContentIcon'
                iconPosition={iconPosition}
                additionalClassArray={['button-container__button']}
                ctaFieldpath={`buttonGroup.ctaField`}
                buttonType={buttonContentType}
            >{text}</Button>}
        </>
    );
}

export { fields } from './fields.jsx';

export const meta = {
    label: 'Button Example Module',
};