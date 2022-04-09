import { FC } from 'react';

import { Suspense } from '@react-18/components/Suspense/Suspense';
import { StartTransition } from '@react-18/components/StartTransition';
import { BatchingWithFlushSync } from '@react-18/components/BatchingWithFlushSync';
import { BatchingWithTimeout } from '@react-18/components/BatchingWithTimeout';
import { Batching } from '@react-18/components/Batching';

const Components = {
  Batching,
  BatchingWithTimeout,
  BatchingWithFlushSync,
  StartTransition,
  Suspense,
};

export const App: FC = () => (
  <div>
    <Components.Suspense />
  </div>
);
