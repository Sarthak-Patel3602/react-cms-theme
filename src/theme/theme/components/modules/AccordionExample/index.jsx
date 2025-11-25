import React from 'react';
import Accordion from '../../islands/Accordion?island';
import { Island, logInfo } from '@hubspot/cms-components';

export function Component(props) {

    const {
            accordionItems = [],
    } = props;

    logInfo(props, 'props');
    return (
        <>
            <section>
                <Island module={Accordion}  accordionItems={accordionItems}  clientOnly hydrateOn='idle' />
            </section>
        </>
    );
}


export { fields } from './fields.jsx';


export const meta = {
    label: 'Accordion Example',
};


