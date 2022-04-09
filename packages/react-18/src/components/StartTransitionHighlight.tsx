import { ChangeEventHandler, FC, useState, useTransition } from 'react';
import { faker } from '@faker-js/faker';

import { useRenderCounter } from '@react-18/utils/useRenderCounter';

interface IPerson {
  id: number;
  name: string;
}

export const fakeNames: IPerson[] = [...Array.from({ length: 40_000 })].map(
  (_, idx) => ({
    id: idx,
    name: faker.name.findName(),
  }),
);

const checkName = (name: string, highlight: string): number =>
  name.toLowerCase().indexOf(highlight.toLowerCase());

const ListItem: FC<{ name: string; highlight: string }> = ({
  name,
  highlight,
}) => {
  const index = checkName(name, highlight);

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

const List: FC<{ items: IPerson[]; highlight: string }> = ({
  items,
  highlight,
}) => {
  useRenderCounter();

  return (
    <>
      {items.map(({ name, id }) => (
        <ListItem name={name} highlight={highlight} key={id} />
      ))}
    </>
  );
};

export const StartTransitionHighlight: FC = () => {
  const [query, setQuery] = useState('');
  const [highlight, setHighlight] = useState(query);
  const [isPending, startTransition] = useTransition();

  const [items] = useState(fakeNames);

  const changeHandler: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setQuery(value);

    startTransition(() => setHighlight(value));
  };

  return (
    <div>
      <input onChange={changeHandler} value={query} type='text' />
      {isPending && <span>Обновление данных</span>}
      <List items={items} highlight={highlight} />
    </div>
  );
};
