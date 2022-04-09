import {
  FC,
  lazy,
  useState,
  Suspense as ReactSuspense,
  PropsWithChildren,
  useEffect,
} from 'react';

import { log } from '@react-18/utils/log';

const LazyComponent = lazy(
  () => import('@react-18/components/Suspense/LazyComponent'),
);

// Кек https://stackoverflow.com/questions/71788254/react-18-typescript-children-fc/71800185
const Container: FC<PropsWithChildren<unknown>> = ({ children }) => {
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
