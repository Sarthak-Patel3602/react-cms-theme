import React from 'react';

const headingClasses = {
  display_1: 'display_1',
  display_2: 'display_2',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

function HeadingComponent({
  headingLevel = 'h2',
  heading,
  headingStyleVariant = '',
  headingStyleColor,
  id,
  className = ''
}) {
  const HeadingTag = headingLevel;
  const style = headingStyleColor?.rgba ? { color: headingStyleColor.rgba } : {};
  const variantClass = headingClasses[headingStyleVariant] || '';

  return (
 
    <HeadingTag
      id={id}
      className={`${variantClass} ${className}`.trim()}
      style={style}
      dangerouslySetInnerHTML={{ __html: heading }}
    />
      
  );
}

export default HeadingComponent;
