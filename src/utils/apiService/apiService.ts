import axios from 'axios';
export const fetchData = async () => {
  const response = await axios.get('https://api.sampleapis.com/futurama/characters');
  return response.data;
};
