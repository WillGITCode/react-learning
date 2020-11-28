import React from 'react';
import Accordion from './components/Accordion';

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

export default () => {
  return (
    <div>
      <h1>Widgets</h1>
      <Accordion items={items} />
    </div>
  );
};