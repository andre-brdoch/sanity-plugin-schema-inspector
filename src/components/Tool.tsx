import * as React from 'react';
import { withRouterHOC } from 'part:@sanity/base/router';
import { Stack, Heading } from '@sanity/ui';
import FullScreenDialog from 'part:@sanity/components/dialogs/fullscreen';
import DownloadButton from './DownloadButton';
import Inspector from './Inspector';
import TypeGroup from './TypeGroup';
import { groups, getType, getTypesByGroups } from '../data';
import { TypeGroupType, Router } from '../types';
import styles from './styles.css';

interface Props {
  title: string;
  router: Router;
}

const Tool = ({ title = 'Schema Inspector', router }: Props) => {
  const { typeName } = router.state;
  const { useState, useEffect } = React;
  const [selectedType, setSelectedType] = useState(getType(typeName));

  useEffect((): void => {
    const type = getType(typeName);
    setSelectedType(type);
  }, [typeName]);

  const closeDialog = (): void => router.navigate({});

  return (
    <div className={styles.pane}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerInner}>
            <Stack space={4}>
              <Heading as="h1" size="4">
                {title}
              </Heading>
              <div>
                <DownloadButton
                  data={getTypesByGroups(['docTypes', 'customFieldTypes'])}
                  name="all"
                  text="Full Schema"
                />
              </div>
            </Stack>
          </div>
        </div>
      </header>

      <div className={styles.container}>
        <main>
          <div className={styles.row}>
            {groups.map((group: TypeGroupType) => (
              <TypeGroup key={group.groupType} {...group} />
            ))}
          </div>

          {selectedType && (
            <FullScreenDialog title={typeName} onClose={closeDialog} onClickOutside={closeDialog}>
              <Stack space="3">
                <div>
                  <DownloadButton
                    data={selectedType}
                    name={selectedType.name}
                    text="Download JSON"
                  />
                </div>
                <Inspector type={selectedType} />
              </Stack>
            </FullScreenDialog>
          )}
        </main>
      </div>
    </div>
  );
};

export default withRouterHOC(Tool);
