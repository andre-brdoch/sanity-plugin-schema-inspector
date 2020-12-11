import * as React from 'react';
import Button from 'part:@sanity/components/buttons/anchor';
import { MdFileDownload } from 'react-icons/md';
import styles from './styles.css';

const DownloadButton = (props: { data: object; name: string }) => {
  const { data, name } = props;
  const json = JSON.stringify(data, null, 2);
  const href = `data:text/json;charset=utf-8,${encodeURIComponent(json)}`;
  const downloadName = `${name}-schema.json`;

  return (
    <Button
      href={href}
      download={downloadName}
      className={styles.downloadButton}
      color="primary"
      size="small"
      icon={MdFileDownload}
    >
      Download JSON
    </Button>
  );
};

export default DownloadButton;
