import { FC } from 'react';

import { BatchingWithTimeout } from '@react-18/components/BatchingWithTimeout';
import { Batching } from '@react-18/components/Batching';

const Components = {
  Batching,
  BatchingWithTimeout,
};

export const App: FC = () => (
  <div>
    <Components.BatchingWithTimeout />
  </div>
);
