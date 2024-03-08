// greet.js

const axios = require('axios');

async function greet() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

module.exports = greet;
