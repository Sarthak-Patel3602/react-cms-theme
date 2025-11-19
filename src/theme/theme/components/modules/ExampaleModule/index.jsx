import React from 'react';
import { logInfo, RichText } from '@hubspot/cms-components';
import HeadingComponent from '../../components/HeadingComponent/HeadingComponent.jsx';
import { Button } from '../../components/ButtonComponent/ButtonComponent.jsx';
import { getLinkFieldHref, getLinkFieldRel, getLinkFieldTarget } from '../../utils/content-fields.jsx';
import ResponsiveSpacingWrapper from '../../components/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import StyledComponentsRegistry from '../../components/StyledComponentsRegistry/StyledComponentsRegistry.jsx';
import RenderImage from '../../components/ImageComponent/imageRenderer.jsx';
export function Component(props) {

  const {
    module_id,
    groupContent: { headingAndTextHeadingLevel, headingAndTextHeading, richTextContentHTML, image_field, showButton,
      groupButton: {
        buttonContentText: text,
        buttonContentLink: link,
        buttonContentShowIcon: showIcon,
        buttonContentIconPosition: iconPosition,
        buttonContentType
      },
    },
    groupStyle: {
      groupContent: {
        headingStyleVariant,
headingStyleColor,
        groupButton: {
          buttonStyleSize,
          buttonStyleVariant,
        },
      },
      groupAlignment: {
        groupAlignmentEnable,
        groupAlignmentOptions:{
          textAlignment, contentWidth, boxAlignment
        }
      }
    }

  } = props;

  const buttonHref = getLinkFieldHref(link);
  const buttonRel = getLinkFieldRel(link);
  const buttonTarget = getLinkFieldTarget(link);

  const widthStyle = contentWidth ? {
      maxWidth: `${contentWidth}px`,
      width: '100%',
    }
    : {};

  const textAlignmentCss = textAlignment.text_align
   

  const textAlignmentStyle = {
    textAlign: textAlignmentCss,
  };


  const contentStyle = {
    ...widthStyle,
    ...textAlignmentStyle,
  };
  logInfo(props, 'props');

  return (
    <>
      <StyledComponentsRegistry>
        <ResponsiveSpacingWrapper moduleId={props?.module?.module_id} fields={props?.fieldValues}>
          <div className='page-center'>
            <div className={`customWidthOption  ${groupAlignmentEnable ? boxAlignment : ''}`} style={groupAlignmentEnable ? contentStyle : undefined}>
              <RenderImage imageField={image_field} />
              {headingAndTextHeading && (
                <HeadingComponent headingLevel={headingAndTextHeadingLevel} headingStyleVariant={headingStyleVariant} heading={headingAndTextHeading} headingStyleColor={headingStyleColor} />
              )}
              {richTextContentHTML && <RichText fieldPath='groupContent.richTextContentHTML' />}
              {showButton && <Button
                buttonSize={buttonStyleSize}
                buttonStyle={buttonStyleVariant}
                href={buttonHref}
                rel={buttonRel}
                target={buttonTarget}
                showIcon={showIcon}
                iconFieldPath='groupButton.buttonContentIcon'
                iconPosition={iconPosition}
                additionalClassArray={['button-container__button']}
                ctaFieldpath={`groupButton.ctaField`}
                buttonType={buttonContentType}
              >{text}</Button>}
            </div>
          </div>
        </ResponsiveSpacingWrapper>
      </StyledComponentsRegistry>
    </>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Example Module',
  content_types: ['BLOG_LISTING', 'BLOG_POST', 'SITE_PAGE', 'LANDING_PAGE'],
};
