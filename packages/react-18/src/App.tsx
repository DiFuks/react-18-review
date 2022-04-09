import { FC } from 'react';

import { StartTransition } from '@react-18/components/StartTransition';
import { BatchingWithFlushSync } from '@react-18/components/BatchingWithFlushSync';
import { BatchingWithTimeout } from '@react-18/components/BatchingWithTimeout';
import { Batching } from '@react-18/components/Batching';

const Components = {
  Batching,
  BatchingWithTimeout,
  BatchingWithFlushSync,
  StartTransition,
};

export const App: FC = () => (
  <div>
    <Components.StartTransition />
  </div>
);
