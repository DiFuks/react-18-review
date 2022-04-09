import { useEffect, useRef } from 'react';

import { log } from '@react-18-review/react-17/src/utils/log';

export const useRenderCounter = (): void => {
  const count = useRef(0);

  count.current += 1;

  log(`Render start count: ${count.current}`);

  useEffect(() => {
    log(`Render finish count ${count.current}`);
  });
};
