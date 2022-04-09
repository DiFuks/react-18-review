import { FC } from 'react';

import { BatchingWithFlushSync } from '@react-17/components/BatchingWithFlushSync';
import { BatchingWithTimeout } from '@react-17/components/BatchingWithTimeout';
import { Batching } from '@react-17/components/Batching';

const Components = {
  Batching,
  BatchingWithTimeout,
  BatchingWithFlushSync,
};

export const App: FC = () => (
  <div>
    <Components.BatchingWithFlushSync />
  </div>
);
