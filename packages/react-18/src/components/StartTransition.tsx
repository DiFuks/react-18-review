import { ChangeEventHandler, FC, useState, useTransition } from 'react';
import { faker } from '@faker-js/faker';

export const fakeNames = [...Array.from({ length: 40_000 })].map(() =>
  faker.name.findName(),
);

const ListItem: FC<{ name: string; highlight: string }> = ({
  name,
  highlight,
}) => {
  const index = name.toLowerCase().indexOf(highlight.toLowerCase());

  if (index === -1) {
    return <div>{name}</div>;
  }

  return (
    <div>
      {name.slice(0, index)}
      <span className='highlight'>
        {name.slice(index, index + highlight.length)}
      </span>
      {name.slice(index + highlight.length)}
    </div>
  );
};

export const StartTransition: FC = () => {
  const [query, setQuery] = useState('');
  const [highlight, setHighlight] = useState('');

  const [isPending, startTransition] = useTransition();

  const changeHandler: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setQuery(value);
    startTransition(() => setHighlight(value));
  };

  return (
    <div>
      <input onChange={changeHandler} value={query} type='text' />
      {isPending && <span>Ввод данных</span>}
      {fakeNames.map((name, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <ListItem key={i} name={name} highlight={highlight} />
      ))}
    </div>
  );
};
