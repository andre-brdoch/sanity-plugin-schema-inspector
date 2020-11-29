import * as React from 'react';
import { StateLink } from 'part:@sanity/base/router';

const TypeLink = (props: {
  typeName: string;
  children: React.ReactNode;
  isExternalLink: boolean;
  className?: string;
}) => {
  const { typeName, children, isExternalLink, className } = props;

  const component = isExternalLink ? 'a' : StateLink;
  const attrs = isExternalLink
    ? {
        href: `https://www.sanity.io/docs/${typeName}-type`,
        target: '_blank',
        rel: 'noreferrer',
      }
    : { state: { typeName } };
  return React.createElement(component, { ...attrs, className }, children);
};

export default TypeLink;
