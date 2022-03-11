import React, { useState } from 'react';
import { RichTextEditor } from '@mantine/rte';

function PostEditor({value, onChange}) {
  return (
    <div>
      <RichTextEditor value={value} onChange={onChange}/>
    </div>
  );
}

export default PostEditor;