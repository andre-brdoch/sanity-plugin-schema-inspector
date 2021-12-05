declare module '*.css';

declare module 'react-json-inspector';

declare module '@sanity/ui';

declare module '@sanity/desk-tool/lib/panes/document/inspectDialog/InspectDialog.styles' {
  import * as React from 'react';
  export class JSONInspectorWrapper extends React.Component {}
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
