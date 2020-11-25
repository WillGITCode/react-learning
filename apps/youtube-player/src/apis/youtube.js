import axios from 'axios';

const KEY = 'AIzaSyDKjrqOg0zhC9dUiT4yzqk9-Qai8K56ibk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});