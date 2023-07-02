import axios from 'axios';

const url = 'http://dev.careeraplus.in/api/blogs';
const origin = 'http://localhost:3000';

export const getBlogs = () => {
    axios.get(url, { headers: { 'Origin': origin } })
  .then(response => {
    // Handle successful response
    console.log(response.data);
  })
  .catch(error => {
    // Handle error
    console.error(error);
  });
}

