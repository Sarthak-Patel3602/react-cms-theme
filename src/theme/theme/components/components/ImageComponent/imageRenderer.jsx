// utils/imageRenderer.js
import React from 'react';
import { logInfo } from '@hubspot/cms-components';

const RenderImage = ({ imageField }) => {
    if (!imageField?.src) return null;

    const imageType = imageField?.size_type;
    const imageGetHeight = imageField?.height;
    const imageGetWidth = imageField?.width;
    const imageGetMaxWidth = imageField?.max_width;
    const imageGetMaxHeight = imageField?.max_height;

    let imageStyle = {};
    let imageWidth;
    let imageHeight;

    // srcSet & sizes logic
    let srcSet, sizes;
    const aspectRatio = imageGetHeight / imageGetWidth;
    const baseName = imageField.name || imageField.src.split('/').pop();

    if (imageType === 'exact') {
        imageWidth = imageGetWidth;
        imageHeight = imageGetHeight;

        const widths = [
            imageGetWidth / 2,
            imageGetWidth,
            imageGetWidth * 1.5,
            imageGetWidth * 2,
            imageGetWidth * 2.5,
            imageGetWidth * 3
        ]
            .map(w => Math.round(w))
            .filter((w, i, arr) => arr.indexOf(w) === i); // unique

        srcSet = widths
            .map(w => {
                const h = Math.round(w * aspectRatio);
                return `${imageField.src}?width=${w}&height=${h}&name=${encodeURIComponent(baseName)} ${w}w`;
            })
            .join(', ');

        sizes = `(max-width: ${imageGetWidth}px) 100vw, ${imageGetWidth}px`;
    } else if (imageType === 'auto') {
        imageStyle = { maxWidth: '100%', height: 'auto' };
    } else if (imageType === 'auto_custom_max') {
        imageWidth = '100%';
        imageStyle = { maxWidth: imageGetMaxWidth, maxHeight: imageGetMaxHeight };
    }

    return (
        <img
            src={`${imageField.src}${imageType === 'exact' ? `?width=${imageGetWidth}&height=${imageGetHeight}&name=${encodeURIComponent(baseName)}` : ''}`}
            alt={imageField.alt || 'default alt text'}
            loading={imageField.loading || 'lazy'}
            style={imageStyle}
            width={imageWidth}
            height={imageHeight}
            {...(imageType === 'exact' && {
                srcSet,
                sizes
            })}
        />
    );
};

export default RenderImage;