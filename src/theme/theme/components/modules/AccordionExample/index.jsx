import React from 'react';
import Accordion from '../../islands/Accordion?island';
import { Island, logInfo } from '@hubspot/cms-components';

export function Component(props) {

    const {
        accordion_items = [],
    } = props;

    // logInfo(props, 'props');
    return (
        <>
            <section>
                <Island module={Accordion} accordion_items={accordion_items} clientOnly hydrateOn='idle' />
            </section>
        </>
    );
}


export { fields } from './fields.jsx';


export const meta = {
    label: 'Accordion Example',
};


