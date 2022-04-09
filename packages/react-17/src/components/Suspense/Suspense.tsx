import {
  FC,
  lazy,
  useState,
  Suspense as ReactSuspense,
  useEffect,
} from 'react';

import { log } from '@react-17/utils/log';

const LazyComponent = lazy(
  () => import('@react-17/components/Suspense/LazyComponent'),
);

const Container: FC = ({ children }) => {
  useEffect(() => {
    log('Container смонтирован!');
  }, []);

  return <div style={{ padding: 20, background: 'red' }}>{children}</div>;
};

export const Suspense: FC = () => {
  const [isLazyShown, setIsLazyShown] = useState(false);

  return (
    <div>
      <div>
        Hello from Suspense
        <button type='button' onClick={() => setIsLazyShown((s) => !s)}>
          Click me
        </button>
      </div>
      {isLazyShown && (
        <ReactSuspense fallback={<div>Загрузка</div>}>
          <Container>
            <LazyComponent />
          </Container>
        </ReactSuspense>
      )}
    </div>
  );
};
