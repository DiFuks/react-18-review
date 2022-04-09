import { FC, lazy, useState, useTransition } from 'react';

import { Photo } from '@react-18/components/SuspenseWithStartTransition/Photo';
import { log } from '@react-18/utils/log';

const Comments = lazy(
  () => import('@react-18/components/SuspenseWithStartTransition/Comments'),
);

export const SuspenseWithStartTransition: FC = () => {
  const [tab, setTab] = useState<'photo' | 'comments'>('photo');
  const [isPending, startTransition] = useTransition();

  const tabToMove = tab === 'photo' ? 'comments' : 'photo';

  const handleClick = (): void => {
    startTransition(() => {
      setTab(tabToMove);
    });
  };

  log(`Current tab: ${tab}`);

  return (
    <div>
      <div>
        Hello from Suspense
        <button type='button' onClick={handleClick}>
          Move to {tabToMove}
        </button>
      </div>
      {isPending && <div>Комменты загружаются</div>}
      {tab === 'photo' ? <Photo /> : <Comments />}
    </div>
  );
};
