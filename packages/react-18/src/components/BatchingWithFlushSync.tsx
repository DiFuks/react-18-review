import { FC, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

export const BatchingWithFlushSync: FC = () => {
  const renderCounter = useRef(0);

  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  renderCounter.current += 1;

  return (
    <div>
      <div>Renders: {renderCounter.current}</div>
      <div>
        Count: {count}, flag: {String(flag)}
      </div>
      <div>
        <button
          type='button'
          onClick={() => {
            flushSync(() => {
              setFlag((f) => !f);
            });

            setCount((c) => c + 1);
          }}
        >
          Click me!
        </button>
      </div>
    </div>
  );
};
