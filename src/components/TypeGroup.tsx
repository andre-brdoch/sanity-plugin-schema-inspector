import * as React from 'react';
import { DefaultPreview } from '@sanity/base/components';
import { Stack, Box, Heading } from '@sanity/ui';
import TypeLink from './TypeLink';
import { TypeType, TypeGroupType } from '../types';
import styles from './styles.css';

const TypeGroup = (props: TypeGroupType) => {
  const { types, groupType, title } = props;
  return (
    types?.length > 0 && (
      <Stack space={3}>
        <header>
          <Heading as="h3" size={1}>
            {title}
          </Heading>
        </header>

        <ul className={styles.list}>
          {types.map((t: TypeType) => (
            <li key={t.name}>
              <TypeLink
                typeName={t.name}
                isExternalLink={groupType === 'coreTypes'}
                className={styles.link}
              >
                <DefaultPreview title={t.name} subtitle={t.title} media={t.icon} />
              </TypeLink>
            </li>
          ))}
        </ul>
      </Stack>
    )
  );
};

export default TypeGroup;
