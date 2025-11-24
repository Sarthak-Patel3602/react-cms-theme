import React from 'react';
import popupModal from '../../islands/Modal?island';
import { Island, logInfo } from '@hubspot/cms-components';
import Styles from './style.module.css';

export function Component(props) {

  const {

  } = props;

  logInfo(props, 'props');
  return (
    <>
      <section>
        <Island module={popupModal} clientOnly hydrateOn='idle' />
      </section>
    </>
  );
}


export { fields } from './fields.jsx';


export const meta = {
  label: 'Modal Example',
};


