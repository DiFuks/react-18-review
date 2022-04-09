import { FC } from 'react';

import { Suspense } from '@react-17/components/Suspense/Suspense';
import { StartTransition } from '@react-17/components/StartTransition';
import { BatchingWithFlushSync } from '@react-17/components/BatchingWithFlushSync';
import { BatchingWithTimeout } from '@react-17/components/BatchingWithTimeout';
import { Batching } from '@react-17/components/Batching';

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
