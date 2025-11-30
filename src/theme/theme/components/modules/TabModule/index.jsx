import React from 'react';
import Tab from '../../islands/TabsAccordion?island';
import { Island, logInfo } from '@hubspot/cms-components';


export function Component(props) {

const {
tab_items = [],
} = props;

// logInfo(props, 'props');
return (
    <>
        <section>
            <Island module={Tab} tab_items={tab_items} clientOnly hydrateOn='idle' />
        </section>
    </>
);
}

export { fields } from './fields.jsx';


export const meta = {
label: 'Tab Module Example',
};


