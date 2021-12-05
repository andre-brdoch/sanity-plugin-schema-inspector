import * as React from 'react';
import { withRouterHOC } from 'part:@sanity/base/router';
import {
  Container, Grid, Stack, Card, Box, Heading,
} from '@sanity/ui';
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
      <Card as="header" borderBottom tone="transparent">
        <Container width={3}>
          <Box paddingY={5} paddingX={4}>
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
          </Box>
        </Container>
      </Card>

      <Container as="main" width={3}>
        <Box paddingY={5} paddingX={4}>
          <Grid columns={[1, 1, 1, 3]} gap={4}>
            {groups.map((group: TypeGroupType) => (
              <TypeGroup key={group.groupType} {...group} />
            ))}
          </Grid>

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
        </Box>
      </Container>
    </div>
  );
};

export default withRouterHOC(Tool);
