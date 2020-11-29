import * as React from 'react';
import DefaultPreview from 'part:@sanity/components/previews/default';
import TypeLink from './TypeLink';
import { TypeType, TypeGroupType } from '../types';
import styles from './styles.css';

const TypeGroup = (props: TypeGroupType) => {
  const { types, groupType, title } = props;
  return (
    types?.length > 0 && (
      <div className={styles.col}>
        <header className={styles.colHeader}>
          <h3 className={styles.colTitle}>{title}</h3>
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
      </div>
    )
  );
};

export default TypeGroup;
