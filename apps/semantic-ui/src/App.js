import React from 'react';
import faker from 'faker';
import CommentContainer from './components/CommentContainer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      loading: true,
      error: ''
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.getComments();
      },
      e => {
        console.log(e);
        this.setState({
          error: e.message,
          loading: false
        })
      }
    );
  }

  getComments = () => {
    this.setState({
      loading: false,
      comments: [
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
      ]
    });
  }


  render() {
    if (this.state.error && this.state.error.length > 0) {
      return (
        <h1>Error: {this.state.error}</h1>
      );
    }
    else if (this.state.comments && this.state.comments.length > 0) {
      return (
        <CommentContainer comments={this.state.comments} />
      );
    }
    return <h2>Loading</h2>
  }
};

export default App;