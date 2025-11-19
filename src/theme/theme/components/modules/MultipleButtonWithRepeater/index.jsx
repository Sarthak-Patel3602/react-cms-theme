import React from 'react';
import { logInfo } from '@hubspot/cms-components';
import { Button } from '../../components/ButtonComponent/ButtonComponent.jsx';
import {
  getLinkFieldHref,
  getLinkFieldRel,
  getLinkFieldTarget,
} from '../../utils/content-fields.jsx';

export function Component(props) {
  const {
    module_id,
    groupContent: {
     groupButtons = [],
    },
  } = props;

  logInfo(props, 'props');


  return (
    <div className="page-center">

     <div className={Style.button_wrapper}>
          {groupButtons.map((button, index) => (
                  <div className={Style.btn_container} key={index}>
                      <Button
                          buttonSize={button.buttonStyleSize}
                          buttonStyle={button.buttonStyleVariant}
                          href={getLinkFieldHref(button.buttonContentLink)}
                          rel={getLinkFieldRel(button.buttonContentLink)}
                          target={getLinkFieldTarget(button.buttonContentLink)}
                          showIcon={button.buttonContentShowIcon}
                          iconFieldPath={`groupContent.groupButton[${index}].buttonContentIcon`}
                          iconPosition={button.buttonContentIconPosition}
                      >
                          {button.buttonContentText}
                      </Button>
                  </div>
          ))}
      </div>
    </div>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Multiple Button With Repeater',
  content_types: ['BLOG_LISTING', 'BLOG_POST', 'SITE_PAGE', 'LANDING_PAGE'],
};
