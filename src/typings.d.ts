declare module '*.css';

declare module 'react-json-inspector';

declare module 'part:@sanity/components/buttons/anchor' {
  import * as React from 'react';
  interface Props {
    children?: any;
    className?: string;
    href?: string;
    download?: string;
    color?: string;
    size?: string;
    icon?: React.ReactNode;
  }
  export default class AnchorButton extends React.Component<Props, any> {}
}

declare module 'part:@sanity/components/snackbar/default' {
  import * as React from 'react';
  interface Props {
    title?: string;
    kind?: string;
    timeout?: number;
    onClose?: Function;
  }
  export default class Snackbar extends React.Component<Props, any> {}
}

declare module 'part:@sanity/components/dialogs/fullscreen' {
  import * as React from 'react';
  interface Props {
    title?: string;
    onClose?: Function;
    onClickOutside?: Function;
  }
  export default class FullScreenDialog extends React.Component<Props, any> {}
}

declare module '@sanity/base/components' {
  import * as React from 'react';
  interface Props {
    title?: string;
    subtitle?: string;
    media?: React.ReactNode;
  }
  export class DefaultPreview extends React.Component<Props, any> {}
}

declare module 'part:@sanity/base/router' {
  import * as React from 'react';
  export function withRouterHOC(cb: Function): React.ReactNode;
  interface StateLinkProps {
    state?: object;
    className?: string;
  }
  export class StateLink extends React.Component<StateLinkProps, any> {}
}
