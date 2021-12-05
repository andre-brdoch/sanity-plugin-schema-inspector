import * as React from 'react';
import ReactInspector from 'react-json-inspector';
import Snackbar from 'part:@sanity/components/snackbar/default';
import { JSONInspectorWrapper } from '@sanity/desk-tool/lib/panes/document/inspectDialog/InspectDialog.styles';
import { MdOpenInNew, MdContentCopy } from 'react-icons/md';
import TypeLink from './TypeLink';
import { typeExists, isCoreType, removeHiddenKeysFromType } from '../data';
import styles from './styles.css';
import { TypeType } from '../types';

const Inspector = (props: { type: TypeType }) => {
  const { type } = props;
  const typeClean = removeHiddenKeysFromType(type);
  const [snackbarMsg, setSnackbarMsg] = React.useState(null);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setSnackbarMsg(`Copied "${text}" to clipboard`);
    });
  };

  const CopyInteractiveLabel = (props: { value: string }) => {
    const { value } = props;
    return (
      <span
        onClick={() => copy(value)}
        className={`${styles.copyLabel} ${styles.interactiveLabel}`}
      >
        {value}
        <MdContentCopy className={styles.labelIcon} />
      </span>
    );
  };

  const LinkInteractiveLabel = (props: { value: string }) => {
    const { value } = props;
    const isExternalLink = isCoreType(value);
    return (
      <TypeLink
        typeName={value}
        isExternalLink={isExternalLink}
        className={`${styles.labelLink} ${styles.interactiveLabel}`}
      >
        {value}
        {isExternalLink && <MdOpenInNew className={styles.labelIcon} />}
      </TypeLink>
    );
  };

  const interactiveLabel = (props: { isKey: boolean; keypath: string; value: string }) => {
    const { keypath, value, isKey } = props;
    const pathParts = keypath.split('.');
    const lastPart = pathParts[pathParts.length - 1];
    const isLink = lastPart === 'type' && !isKey && value && typeExists(value);
    const canBeCopied = lastPart === 'name' && !isKey && value;

    if (isLink) return <LinkInteractiveLabel value={value} />;
    if (canBeCopied) return <CopyInteractiveLabel value={value} />;
    return '';
  };

  return (
    typeClean && (
      <JSONInspectorWrapper>
        <div className={styles.inspectorContainer}>
          <ReactInspector
            data={typeClean}
            isExpanded={() => true}
            interactiveLabel={interactiveLabel}
          />

          {snackbarMsg && (
            <Snackbar
              title={snackbarMsg}
              kind="success"
              timeout={1200}
              onClose={() => setSnackbarMsg(null)}
            />
          )}
        </div>
      </JSONInspectorWrapper>
    )
  );
};

export default Inspector;
