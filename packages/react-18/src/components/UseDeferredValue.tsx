import {
  ChangeEventHandler,
  FC,
  memo,
  useDeferredValue,
  useState,
} from 'react';
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

export const UseDeferredValue: FC = () => {
  const [query, setQuery] = useState('');

  const [items] = useState(fakeNames);

  const changeHandler: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setQuery(value);
  };

  const highlight = useDeferredValue(query);

  return (
    <div>
      <input onChange={changeHandler} value={query} type='text' />
      <List items={items} highlight={highlight} />
    </div>
  );
};
