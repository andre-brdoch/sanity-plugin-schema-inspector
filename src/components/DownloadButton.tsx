import * as React from 'react';
import { Button } from '@sanity/ui';
import { MdFileDownload } from 'react-icons/md';

const DownloadButton = (props: { data: object; name: string; text: string }) => {
  const { data, name, text } = props;
  const json = JSON.stringify(data, null, 2);
  const href = `data:text/json;charset=utf-8,${encodeURIComponent(json)}`;
  const downloadName = `${name}-schema.json`;

  return (
    <Button
      as="a"
      href={href}
      download={downloadName}
      justify="flex-start"
      tone="positive"
      icon={MdFileDownload}
      text={text}
    />
  );
};

export default DownloadButton;
