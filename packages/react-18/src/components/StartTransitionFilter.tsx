import { ChangeEventHandler, FC, memo, useState, useTransition } from 'react';
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

const filterItems = (items: IPerson[], name: string): IPerson[] =>
  items.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));

const List: FC<{ items: IPerson[]; highlight: string }> = memo(
  ({ items, highlight }) => {
    useRenderCounter();

    const filteredItems = filterItems(items, highlight);

    return (
      <>
        {filteredItems.map(({ id, name }) => (
          <div key={id}>{name}</div>
        ))}
      </>
    );
  },
);

export const StartTransitionFilter: FC = () => {
  const [query, setQuery] = useState('');
  const [highlight, setHighlight] = useState('');

  const [items] = useState(fakeNames);
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
      {isPending && <span>Обновление данных</span>}
      <List items={items} highlight={highlight} />
    </div>
  );
};
