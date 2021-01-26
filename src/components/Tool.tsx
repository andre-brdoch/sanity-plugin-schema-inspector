import * as React from 'react';
import { withRouterHOC } from 'part:@sanity/base/router';
import { studioTheme, ThemeProvider, ToastProvider } from '@sanity/ui';
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
    <ThemeProvider theme={studioTheme}>
      <div className={styles.pane}>
        <header className={styles.header}>
          <div className={styles.container}>
            <div className={styles.headerInner}>
              <h1 className={styles.title}>{title}</h1>
              <DownloadButton data={getTypesByGroups(['docTypes', 'customFieldTypes'])} name="all">
                Full Schema
              </DownloadButton>
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
                <ToastProvider>
                  <DownloadButton data={selectedType} name={selectedType.name}>
                    Download JSON
                  </DownloadButton>
                  <Inspector type={selectedType} />
                </ToastProvider>
              </FullScreenDialog>
            )}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default withRouterHOC(Tool);
