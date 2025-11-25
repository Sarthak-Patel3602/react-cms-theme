import React from 'react';
import Tab from '../../islands/TabsAccordion?island';
import { Island, logInfo } from '@hubspot/cms-components';


export function Component(props) {

    const {

    } = props;

    logInfo(props, 'props');
    return (
        <>
            <section>
                <Island module={Tab} clientOnly hydrateOn='idle' />
            </section>
        </>
    );
}

export const meta = {
    label: 'Tab Module Example',
};


