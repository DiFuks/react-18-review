import { FC, useState } from 'react';

import { StartTransitionHighlight } from '@react-18/components/StartTransitionHighlight';
import { UseDeferredValue } from '@react-18/components/UseDeferredValue';
import { SuspenseWithStartTransition } from '@react-18/components/SuspenseWithStartTransition/SuspenseWithStartTransition';
import { Suspense } from '@react-18/components/Suspense/Suspense';
import { StartTransitionFilter } from '@react-18/components/StartTransitionFilter';
import { BatchingWithFlushSync } from '@react-18/components/BatchingWithFlushSync';
import { BatchingWithTimeout } from '@react-18/components/BatchingWithTimeout';
import { Batching } from '@react-18/components/Batching';

const Components = {
  Batching,
  BatchingWithTimeout,
  BatchingWithFlushSync,
  Suspense,
  SuspenseWithStartTransition,
  StartTransitionHighlight,
  StartTransitionFilter,
  UseDeferredValue,
};

export const App: FC = () => {
  const [currentComponentName, setCurrentComponentName] =
    useState<keyof typeof Components>('Batching');

  const CurrentComponent = Components[currentComponentName];

  return (
    <div>
      <div
        style={{
          fontSize: 10,
          borderBottom: '1px solid grey',
          marginBottom: 10,
        }}
      >
        {Object.keys(Components).map((componentName) => (
          <span
            key={componentName}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              paddingRight: 10,
              marginBottom: 4,
            }}
          >
            <input
              style={{ margin: 0 }}
              type='radio'
              checked={currentComponentName === componentName}
              onClick={() =>
                setCurrentComponentName(
                  componentName as keyof typeof Components,
                )
              }
            />
            {componentName}
          </span>
        ))}
      </div>
      <CurrentComponent />
    </div>
  );
};
