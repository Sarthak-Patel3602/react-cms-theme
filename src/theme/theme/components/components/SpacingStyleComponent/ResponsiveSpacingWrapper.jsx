// shared/ResponsiveSpacingWrapper.jsx
import React, { useMemo } from 'react';
import { getSpacingStyle } from './getSpacingStyle';
import { Island } from '@hubspot/cms-components';
import BackgroundVideo from '../../islands/BackgroundVideo.jsx?island';

const ResponsiveSpacingWrapper = ({ moduleId, fields, children }) => {
  const spacingStyles = getSpacingStyle(fields);

  // Extract props
  const customClass = fields?.customClassAndID?.customClass || '';
  const customID = fields?.customClassAndID?.customID?.trim();
  const backgroundType = fields?.groupStyle?.groupBackground?.background_option;
  const enableOverlay = fields?.groupStyle?.groupBackground?.enable_overlay_color;
  const overlayColor = fields?.groupStyle?.groupBackground?.overlay_color?.rgba || 'transparent';

  const videoUrl = fields?.groupVideo?.videoUrl;
  const videoPosterUrl = fields?.groupStyle?.groupVideo?.videoPosterUrl?.src;
  const hideVideoMobile = fields?.groupVideo?.hide_video_mobile || false;

  // Fallback ID
  const fallbackId = Math.random().toString(36).substr(2, 5);
  const uniqueClass = useMemo(() => `section-spacing-${moduleId || fallbackId}`, [moduleId]);

  const sectionId = customID || uniqueClass;

  const positionMap = {
    TOP_LEFT: 'top left',
    TOP_CENTER: 'top center',
    TOP_RIGHT: 'top right',
    CENTER_LEFT: 'center left',
    CENTER_CENTER: 'center center',
    CENTER_RIGHT: 'center right',
    BOTTOM_LEFT: 'bottom left',
    BOTTOM_CENTER: 'bottom center',
    BOTTOM_RIGHT: 'bottom right',
  };

  // Background styling
  const backgroundStyle = useMemo(() => {
    const bg = fields?.groupStyle?.groupBackground;
    if (backgroundType === 'color') {
      return { backgroundColor: bg?.bg_color?.rgba };
    }
    if (backgroundType === 'gradient_color') {
      return { backgroundImage: bg?.bg_gradient?.css };
    }
    if (backgroundType === 'image') {
      return {
        backgroundImage: `url(${bg?.bg_image?.src})`,
        backgroundSize: bg?.bg_image?.background_size || 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: positionMap[bg?.bg_image?.background_position] || 'center',
      };
    }
    return {};
  }, [backgroundType, fields]);

  // Generate spacing styles per device
  const buildSpacing = (device) => {
    const s = spacingStyles[device];
    const parts = [
      s.paddingTop !== '0px' && `padding-top:${s.paddingTop};`,
      s.paddingBottom !== '0px' && `padding-bottom:${s.paddingBottom};`,
      s.paddingLeft !== '0px' && `padding-left:${s.paddingLeft};`,
      s.paddingRight !== '0px' && `padding-right:${s.paddingRight};`,
      s.marginTop !== '0px' && `margin-top:${s.marginTop};`,
      s.marginBottom !== '0px' && `margin-bottom:${s.marginBottom};`,
      s.marginLeft !== '0px' && `margin-left:${s.marginLeft};`,
      s.marginRight !== '0px' && `margin-right:${s.marginRight};`,
    ].filter(Boolean).join('');
    return { css: parts, active: parts !== '' };
  };

  const desktop = buildSpacing('desktop');
  const laptop = buildSpacing('laptop');
  const tablet = buildSpacing('tablet');
  const mobile = buildSpacing('mobile');

  const sectionClasses = [
    customClass,
    uniqueClass,
    enableOverlay && 'has-overlay',
    backgroundType === 'video_bg' && 'background-video-container',
  ].filter(Boolean).join(' ');

  // Should generate <style> block?
  const shouldRenderStyle = (
    backgroundType === 'video_bg' ||
    enableOverlay ||
    desktop.active || laptop.active || tablet.active || mobile.active
  );

  return (
    <>
      {shouldRenderStyle && (
        <style>{`
          ${backgroundType === 'video_bg' ? `
            .${uniqueClass} {
              position: relative;
              overflow: hidden;
            }
            .${uniqueClass}.background-video-container .page-center {
              position: relative;
              z-index: 4;
            }
            .${uniqueClass}.background-video-container::after {
              z-index: 1;
            }
          ` : ''}
          ${enableOverlay ? `
            .${uniqueClass} {
              position: relative;
            }
            .${uniqueClass}::after {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: ${overlayColor};
              pointer-events: none;
              z-index: 1;
            }
          ` : ''}
          ${desktop.active ? `
            .${uniqueClass} {
              ${desktop.css}
            }
          ` : ''}
          ${laptop.active ? `
            @media (max-width: 1199px) {
              .${uniqueClass} {
                ${laptop.css}
              }
            }
          ` : ''}
          ${tablet.active ? `
            @media (max-width: 991px) {
              .${uniqueClass} {
                ${tablet.css}
              }
            }
          ` : ''}
          ${mobile.active ? `
            @media (max-width: 767px) {
              .${uniqueClass} {
                ${mobile.css}
              }
            }
          ` : ''}
        `}</style>
      )}

      <section
        className={sectionClasses}
        id={sectionId}
        style={backgroundType === 'video_bg' ? {} : backgroundStyle}
      >
        {backgroundType === 'video_bg' && videoUrl && (
          <Island
            module={BackgroundVideo}
            hydrateOn="load"
            videoSrc={videoUrl}
            poster={videoPosterUrl}
            mobileHide={hideVideoMobile}
            overlayColor={overlayColor}
          />
        )}
        {children}
      </section>
    </>
  );
};

export default ResponsiveSpacingWrapper;
