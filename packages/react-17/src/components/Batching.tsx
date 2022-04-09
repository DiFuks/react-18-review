import { FC, useRef, useState } from 'react';

export const Batching: FC = () => {
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
            setFlag((f) => !f);
            setCount((c) => c + 1);
          }}
        >
          Click me!
        </button>
      </div>
    </div>
  );
};
