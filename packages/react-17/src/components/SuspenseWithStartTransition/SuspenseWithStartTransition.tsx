import { FC, lazy, useState, Suspense } from 'react';

const Photo = lazy(
  () => import('@react-17/components/SuspenseWithStartTransition/Photo'),
);

const Comments = lazy(
  () => import('@react-17/components/SuspenseWithStartTransition/Comments'),
);

export const SuspenseWithStartTransition: FC = () => {
  const [tab, setTab] = useState<'photo' | 'comments'>('photo');

  const tabToMove = tab === 'photo' ? 'comments' : 'photo';

  return (
    <div>
      <div>
        Hello from Suspense
        <button type='button' onClick={() => setTab(tabToMove)}>
          Move to {tabToMove}
        </button>
      </div>
      <Suspense fallback={<div>Загрузка</div>}>
        {tab === 'photo' ? <Photo /> : <Comments />}
      </Suspense>
    </div>
  );
};
