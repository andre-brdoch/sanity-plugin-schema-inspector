import schema from 'part:@sanity/base/schema';
import {
  BiToggleLeft,
  BiCube,
  BiBracket,
  BiCodeCurly,
  BiImage,
  BiCalendar,
  BiTimeFive,
  BiFile,
  BiCurrentLocation,
  BiCode,
  BiFont,
  BiPaperclip,
  BiLinkAlt,
} from 'react-icons/bi';
import { VscReferences, VscTextSize } from 'react-icons/vsc';
import { GiSnail } from 'react-icons/gi';
import { TiSortNumerically } from 'react-icons/ti';
import { TypeType, TypeGroupType } from './types';

const { types } = schema._source;
const docTypes = types.filter((t: TypeType) => t.type === 'document');
const customFieldTypes = types.filter((t: TypeType) => !docTypes.includes(t));

const coreTypes = [
  { name: 'array', type: 'type', icon: BiBracket },
  { name: 'block', type: 'type', icon: BiCube },
  { name: 'boolean', type: 'type', icon: BiToggleLeft },
  { name: 'date', type: 'type', icon: BiCalendar },
  { name: 'datetime', type: 'type', icon: BiTimeFive },
  { name: 'document', type: 'type', icon: BiFile },
  { name: 'file', type: 'type', icon: BiPaperclip },
  { name: 'geopoint', type: 'type', icon: BiCurrentLocation },
  { name: 'image', type: 'type', icon: BiImage },
  { name: 'number', type: 'type', icon: TiSortNumerically },
  { name: 'object', type: 'type', icon: BiCodeCurly },
  { name: 'reference', type: 'type', icon: VscReferences },
  { name: 'slug', type: 'type', icon: GiSnail },
  { name: 'string', type: 'type', icon: BiFont },
  { name: 'span', type: 'type', icon: BiCode },
  { name: 'text', type: 'type', icon: VscTextSize },
  { name: 'url', type: 'type', icon: BiLinkAlt },
];

export const groups: Array<TypeGroupType> = [
  {
    groupType: 'docTypes',
    title: 'Document Types',
    types: docTypes,
  },
  {
    groupType: 'customFieldTypes',
    title: 'Custom Field Types',
    types: customFieldTypes,
  },
  {
    groupType: 'coreTypes',
    title: 'Core Types',
    types: coreTypes,
  },
];

const allTypes = groups.reduce((acc, val) => acc.concat(val.types), []);

const getTypeFromList = (list: Array<TypeType>, name: string): TypeType =>
  list.find((t: TypeType) => t.name === name);

export const getType = (name: string): TypeType => getTypeFromList(allTypes, name);

export const typeExists = (name: string): boolean => getType(name) != null;

export const isCoreType = (name: string): boolean => getTypeFromList(coreTypes, name) != null;
