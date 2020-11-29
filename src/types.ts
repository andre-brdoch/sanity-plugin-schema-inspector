import { ReactNode } from 'react';

export interface TypeType {
  name: string;
  type: string;
  title?: string;
  icon?: ReactNode;
}

export interface TypeGroupType {
  groupType: 'docTypes' | 'customFieldTypes' | 'coreTypes';
  title: string;
  types: Array<TypeType>;
}

export interface Router {
  state: object;
  navigate: Function;
}
