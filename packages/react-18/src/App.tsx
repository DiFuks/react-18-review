import { FC } from 'react';

import { SuspenseWithStartTransition } from '@react-18/components/SuspenseWithStartTransition/SuspenseWithStartTransition';
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
  SuspenseWithStartTransition,
};

export const App: FC = () => (
  <div>
    <Components.SuspenseWithStartTransition />
  </div>
);
