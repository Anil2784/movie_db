// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/', // Replace with your API URL
});

export default instance;
