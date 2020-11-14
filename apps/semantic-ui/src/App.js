import React from 'react';
import faker from 'faker';
import CommentContainer from './components/CommentContainer';

const comments = [
  {
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    text: faker.lorem.sentence(),
    date: faker.date.soon().toLocaleDateString()
  },
  {
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    text: faker.lorem.sentence(),
    date: faker.date.soon().toLocaleDateString()
  },
  {
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    text: faker.lorem.sentence(),
    date: faker.date.soon().toLocaleDateString()
  }
];

const App = () => {
  return (
    <CommentContainer comments={comments} />
  );
};

export default App;