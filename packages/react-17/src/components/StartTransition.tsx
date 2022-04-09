import { ChangeEventHandler, FC, useState } from 'react';
import { faker } from '@faker-js/faker';

export const fakeNames = [...Array.from({ length: 20_000 })].map(() =>
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

  const changeHandler: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setQuery(value);

  return (
    <div>
      <input onChange={changeHandler} value={query} type='text' />
      {fakeNames.map((name, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <ListItem key={i} name={name} highlight={query} />
      ))}
    </div>
  );
};
