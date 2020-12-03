import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';

const items = [
  {
    title: 'What is React',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'How does React work',
    content: 'Magic, coffee, and Redbull'
  },
  {
    title: 'What can I make in React',
    content: 'Experiences baby!'
  }
];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  }
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <h1>Widgets</h1>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};